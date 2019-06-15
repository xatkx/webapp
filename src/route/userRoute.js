const router = require('express-promise-router')(),
    passport = require('passport')

const {
     signUp,
     signPost,
     signin,
     logout
} = require('./handler/userHandler')

router.route('/user/sign-up')
    .get(signUp)
    .post(signPost)

router.route('/user/sign-in')
    .get(signin)
    .post(passport.authenticate('local',{
        successRedirect: '/notes',
        failureRedirect: '/user/sign-in',
        failureFlash: true
    }))

router.route('/user/logout')
    .get(logout)

module.exports = router;