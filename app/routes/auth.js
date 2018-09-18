import User from '../models/user'

module.exports = (router, passport) => {
  
  /* Authentication */
const isLogged = (req, res, next) => {
  if (req.isAuthentiated()) return next()
  res.redirect('/')
}

const isLoggedOut = (req, res, next) => {
  if (req.isUnathenticated()) return next()
  res.redirect('/')
}

router.get('/login', (req, res) => {
  res.json({ message: 'Login GET' });
});
  
router.get('/signup', (req, res) => {
  res.json({ message: 'Signup GET' });
});

//Passport local login
router.post('/login',
           passport.authenticate('localLogin', { successRedirect: '/polls', failureRedirect: '/', failureFlash: true})
)

//Passport local register
router.post('/register', (req, res, next) => {
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

router.get('/auth/github', passport.authenticate('github'))

router.get('/auth/gihub/callback', 
           passport.authenticate('github', { successRedirect: '/polls', failureRedirect: '/', failureFlash: true})
          )
  
router.all('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})
  
}