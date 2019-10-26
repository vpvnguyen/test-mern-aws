const router = require('express').Router();
const passport = require('passport');


const CLIENT_HOME_PAGE_URL = 'http://localhost:3000'


// when login is successful, retrieve user info
router.get("/login/success", (req, res) => {
    if (req.user) {
      res.json({
        success: true,
        message: "user has successfully authenticated",
        user: req.user,
        cookies: req.cookies
      });
    }
  });

//auth log out 
router.get('/logout', (req, res) => {
    //handle with passport 
    req.logout(); 
    res.redirect(CLIENT_HOME_PAGE_URL); 
}); 

//failre redirect 
router.get('/login/failed', (req, res) => {
    res.status(401).json({
        success: false, 
        message: 'user failed to authenticate'
    }); 
}); 

//google auth 
router.get('/google', passport.authenticate('google', {
    scope: ['profile'],
    failureRedirect: CLIENT_HOME_PAGE_URL
  })
);

//google auth redirect 
router.get('/google/redirect', passport.authenticate('google', {
        successRedirect: CLIENT_HOME_PAGE_URL, 
        failureRedirect: '/auth/login/failed'
    })
); 

router.get('/dashboard', (req, res) => {
  res.send()
}); 


module.exports = router;