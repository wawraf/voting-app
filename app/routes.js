import express from 'express'
import Poll from './config/model'

const router = express.Router()

/* Router PARAM settings */

router.param('pollId', (req, res, next, id) => {
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

router.param('answerId', (req, res, next, id) => {
  if (!req.answers) {
    const err = new Error('Document (answer) not found in DB.')
    err.status = 404
    return next(err)
  }
  
  req.answer = req.poll.answers.id(id)
})

/* GET,POST, DELETE Routes */
router.get('/', (req, res) => {
  res.json({
    response: 'GET for home route',
    body: req.body,
  })
})

router.get('/polls', (req, res, next) => {
  Poll.find({}, (err, docs) => {
    if (err) return next(err)
    res.status(200).json(docs);
  })
})

router.get('/:pollId', (req, res) => {
  res.json(req.poll);
})

router.post('/new', (req, res, next) => {
  const poll = new Poll(req.body)
  poll.save((err, doc) => {
    if (err) return next(err)
    res.status(201).json(doc)
  })
})

router.post('/:pollId/new', (req, res, next) => {
  req.poll.answers.push(req.body);
  
  req.poll.save((err, doc) => {
    if (err) return next(err)
    res.status(201).json(doc)
  })
})

router.post('/:pollId/:answerId/vote', (req, res, next) => {
  req.answer.vote(req.vote, (err, doc) => {
    if (err) return next(err)
    res.json(doc)
  })
})

router.delete('/:pollId', (req, res, next, id) => {
  req.poll.remove((err) => {
    if (err) return next(err)
    
    req.poll.save((err, doc) => {
      if (err) return next(err)
      res.json(doc)
    })
  })
})

export default router