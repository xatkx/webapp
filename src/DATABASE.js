const mongoose = require('mongoose'),
    uri = 'mongodb+srv://xatkx:xatkx123@primerddbb-btain.mongodb.net/test?retryWrites=true';


mongoose.connect(uri,{
    useNewUrlParser: true,
    useFindAndModify: false
}).then(e => {
    console.log(`base de datos conectada`)
}).catch(err => {
    throw err;
})