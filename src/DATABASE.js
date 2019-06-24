const mongoose = require('mongoose'),
    uri = 'db uri';


mongoose.connect(uri,{
    useNewUrlParser: true,
    useFindAndModify: false
}).then(e => {
    console.log(`base de datos conectada`)
}).catch(err => {
    throw err;
})
