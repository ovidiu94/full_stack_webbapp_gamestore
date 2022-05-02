const mongoose = require('mongoose')

const gameSchema = mongoose.Schema({

    name: {type: String , require},
    platforms : [] ,
    prices : [] ,
    category : {type: String , require},
    image : {type: String , require},
    description : {type: String , require},
}, {
    timestamps:true,
})

const gameModel = mongoose.model('games', gameSchema)

module.exports = gameModel