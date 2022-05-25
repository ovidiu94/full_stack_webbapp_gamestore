const mongoose = require('mongoose');

var mongoURL='mongodb+srv://admin:admin12345@gamestore.xhnru.mongodb.net/game-store'

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true,})



var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('MongoDB Connection Successfull');
})

db.on('error' , ()=>{
    console.log(`MongoDB Connection failed`);
})

module.exports =mongoose