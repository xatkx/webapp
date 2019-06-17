const passport = require('passport'),
    {
        Strategy
    } = require('passport-local'),
    User = require('../modals/usuario')



passport.use(new Strategy({
        usernameField: 'email'
    },

    async (email, password, done) => {

        const usuario = await User.findOne({
            email: email
        })
        if (!usuario) {
            done(null, false, {
                message: 'usuario no registrado'
            })
        } else {
            match = await usuario.matchPass(password)
            if (match) {
                done(null, usuario)
            } else {
                done(null, false, {
                    message: 'contraseña invalidad'
                })
            }
        }
    }
));
passport.serializeUser((usuario, done) => {
    done(null,usuario.id);
})
passport.deserializeUser((userid,done) => {
    User.findById(userid, (err,usuario)=> {
        done(err,usuario);
    });
});