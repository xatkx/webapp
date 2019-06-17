const bcrypt = require('bcryptjs')

const {
    model,
    Schema
} = require('mongoose');

const UserSchema = Schema({
    nick: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


UserSchema.methods.bcrypt = async function (passworld) {

    let salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(passworld, salt)

     return hash
}

UserSchema.methods.matchPass = async function (pass) {

    return await bcrypt.compare(pass, this.password)
}
module.exports = model('userv2', UserSchema);