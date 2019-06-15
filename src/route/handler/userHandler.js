const User = require('../../modals/usuario')
module.exports = {
    signUp: async (req, res) => {
        res.render('user/sing-Up');
    },
    signPost: async (req, res) => {
        let {

            nick,
            password,
            password2,
            email

        } = req.body



        // validacion :p

        // -/>

        const newuser = new User({
            nick,
            password,
            email
        });

        newuser.password = await newuser.bcrypt(password)
        await newuser.save()
        req.flash('alert',{msg: `usuario creado: ${newuser.nick} asi creado perra`,status: 'info'})
        res.redirect('/notes')
    },
    signin: async (req, res) => {
        res.render('user/sing-in')
    },
    logout: async (req, res) => {
        req.flash('alert',{msg: `acabas de cerrar session ${req.user.nick} vuelve pronto :v`, status: 'info'})
        req.logout();
        res.redirect('/')
    }

}