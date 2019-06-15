const helper = {};


helper.authenticated = (req, res, next) => {
    console.log(req.isAuthenticated())
    if(req.isAuthenticated())
    {
        next()
    }
    else{
        req.flash('alert',{msg: 'no estas autorisado a esta pag', status: 'warning'})
        res.redirect('/user.sing-in');
    }
}
module.exports = helper