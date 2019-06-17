const {
    Schema,
    model
} = require('mongoose')


const NotesSchema = new Schema({

    title: {type: String, required: true},
    task: {type: String, required: true},
    date: {type: Date, default: Date.now}
})

module.exports = model('Notes', NotesSchema);