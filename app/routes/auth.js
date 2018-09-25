import User from '../models/user'

module.exports = (router, passport) => {
  
  /* Authentication */
const isLogged = (req, res, next) => {
  if (req.isAuthenticated()) return next()
  res.redirect('/')
}

const isLoggedOut = (req, res, next) => {
  if (req.isUnauthenticated()) return next()
  res.redirect('/')
}

router.get('/api/login', (req, res) => {
  res.json({ message: 'Login GET' });
});
  
router.get('/api/signup', (req, res) => {
  res.json({ message: 'Signup GET' });
});

//Passport local login
router.post('/api/login',
           passport.authenticate('localLogin', { successRedirect: '/polls', failureRedirect: '/', failureFlash: true})
)

//Passport local register
router.post('/api/register', (req, res, next) => {
  passport.authenticate('localRegister', (err, user, info) => {
    if (err) return next(err)
    
    if (info.message === 'Username taken') {
      return res.json(info)
    }
    
    req.login(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/polls');
    });
  })(req, res, next) // Here we inject req into passport strategy
})

router.get('/auth/github', isLoggedOut, passport.authenticate('github'))

router.get('/auth/github/callback', 
           passport.authenticate('github', { successRedirect: '/', failureRedirect: '/', failureFlash: true})
          )
  
router.get('/auth/user', (req, res, next) => {
  req.user
    ? res.json({ user: req.user })
    : res.json({ user: null })
})
  
router.get('/api/logout', isLogged, (req, res) => {
  req.logout()
  res.redirect('/')
})
  
}