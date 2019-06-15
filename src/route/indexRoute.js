const router = require('express-promise-router')()
const {
    inicio,
    about
} = require('./handler/indexHandler')

router.route('/')
    .get(inicio)

router.route('/about')
    .get(about)

module.exports = router;