const mongoose = require('mongoose'),
    uri = 'uri de la base de datos';

mongoose.connect(uri,{
    useNewUrlParser: true,
    useFindAndModify: false
}).then(e => {
    console.log(`base de datos conectada`)
}).catch(err => {
    throw err;
})
