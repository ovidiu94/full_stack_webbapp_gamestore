const mongoose = require('mongoose');
var crypto = require('crypto'); 


const userSchema = mongoose.Schema({
    name : {type: String, require},
    email : {type: String, require},
    hash : {type: String, require},
    salt : {type: String, require},
    isAdmin : {type: Boolean, require, default: false},
}, {
    timestamps: true,
})

// Method to set salt and hash the password for a user 
userSchema.methods.setPassword = function(password) { 
     
    // Creating a unique salt for a particular user 
       this.salt = crypto.randomBytes(16).toString('hex'); 
     
       // Hashing user's salt and password with 1000 iterations, 
        
       this.hash = crypto.pbkdf2Sync(password, this.salt,  
       1000, 64, `sha512`).toString(`hex`); 
   }; 
     
   // Method to check the entered password is correct or not 
   userSchema.methods.validPassword = function(password) { 
       var hash = crypto.pbkdf2Sync(password,  
       this.salt, 1000, 64, `sha512`).toString(`hex`); 
       return this.hash === hash; 
   }; 
 
module.exports = mongoose.model('users', userSchema)