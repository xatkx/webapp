const helper = {};


helper.authenticated = (req, res, next) => {
    if(req.isAuthenticated())
    {
        next()
    }
    else{
        req.flash('alert',{ msg: 'por favor inicie session primero', status: 'warning'})
        res.redirect('/user/sign-in');
    }
}
module.exports = helper