import Poll from '../models/poll'

module.exports = (router) => {
  
  /* Authentication */
  const isLogged = (req, res, next) => {
    if (req.isAuthenticated() || process.env.NODE_ENV == 'test') return next()
    res.redirect('/')
  }

  const isLoggedOut = (req, res, next) => {
    if (req.isUnauthenticated()) return next()
    res.redirect('/')
  }

  /* Router PARAM settings */
  router.param('pID', (req, res, next, id) => {
    Poll.findById(id, (err, doc) => {
      if (err) return next(err)

      if (!doc) {
        const err = new Error('Document (poll) not found in DB.')
        err.status = 404
        return next(err)
      }

      req.poll = doc;
      return next();
    })
  })

  router.param('aID', (req, res, next, id) => {
    req.answer = req.poll.answers.id(id)

    if (!req.answer) {
      const err = new Error('Document (answer) not found in DB.')
      err.status = 404
      return next(err)
    }

    return next();
  })


  /* GET,POST, DELETE Routes */
  router.get('/api/polls', (req, res, next) => {
    Poll.find({}, (err, docs) => {
      if (err) return next(err)
      res.status(200).json(docs);
    })
  })

  router.get('/api/poll/:pID', (req, res) => {
    res.json(req.poll);
  })

  router.post('/api/new', (req, res, next) => {
    const poll = new Poll(req.body)
    
    /* Removing duplicates */
    let obj = {};
    const len = poll.answers.length

    for ( var i=0; i < len; i++ )
        obj[poll.answers[i]['answer']] = poll.answers[i];

    poll.answers = new Array();
    for ( var key in obj )
        poll.answers.push(obj[key]);
    /* Removing duplicates */
    
    poll.save((err, doc) => {
      if (err) return next(err)
      res.status(201).json(doc)
    })
  })

  router.put('/api/poll/:pID/new', (req, res, next) => {
    const answers = req.poll.answers
    
    if (answers.map(function(e) { return e.answer; }).indexOf(req.body.answer) == -1)
    req.poll.answers.push(req.body)
    else return next(new Error('This answer already exist in this poll.'))

    req.poll.save((err, doc) => {
      if (err) return next(err)
      res.status(201).json(doc)
    })
  })

  router.put('/api/poll/:pID/:aID/vote', (req, res, next) => {
    req.answer.vote((err, doc) => {
      if (err) return next(err)
      res.json(doc)
    })
  })

  router.delete('/api/poll/:pID', isLogged, (req, res, next) => {
    req.poll.remove((err) => {
      if (err) return next(err)

      req.poll.save((err, doc) => {
        if (err) return next(err)
        res.json(doc)
      })
    })
  })

}