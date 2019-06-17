const express = require('express'),
    path = require('path'),
    flash = require('connect-flash'),
    session = require('express-session'),
    passport = require('passport')
// init
const app = express();
require('./DATABASE.js');
require('./config/passport')

// setting
app.set('PORT', 8888)

app.set('views',path.join(__dirname,'views'))
app.engine('hbs', require('express-handlebars')({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layoutMain'),
    partialsDir: path.join(app.get('views'),'partial'),
    extname: '.hbs'
}))
app.set('view engine','.hbs')

// midleware

app.use(
    express.urlencoded({extended: false}),
    session({
        secret: 'queso',
        resave: true,
        saveUninitialized: true
    }),
    passport.initialize(),
    passport.session(),
    flash()
    )

// globals v

app.use((req, res, nxt) => {
    res.locals.Alert = req.flash('alert')
    res.locals.user = req.user || null
    res.locals.error = req.flash('error')
    nxt()

})

// route
/* 
app.get('/',(req, res) => {
    res.r
}) */

app.use(require('./route/indexRoute'))
app.use(require('./route/notesRoute'))
app.use(require('./route/userRoute'))

// public
app.use(express.static(path.join(__dirname, 'public')))

// listener
app.listen(app.get('PORT'),() => {
    console.log('server on in port:',app.get('PORT'))
})