const bcrypt = require('bcryptjs')
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {type: String, require},
    email : {type: String, require},
    password : {type: String, require},
    isAdmin : {type: Boolean, require, default: false},
}, {
    timestamps: true,
})
userSchema.pre('save', async function(next){
    
    if(!this.isModified('password')) {
        next()
    }
    const salt =await bcrypt.genSalt(15)
    this.password = await bcrypt.hash(this.password, salt)
})

module.exports = mongoose.model('users', userSchema)