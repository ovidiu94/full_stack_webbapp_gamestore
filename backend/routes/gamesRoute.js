const express = require('express');
const router = express.Router();
const Game = require('../models/gameModel')


router.get("/getallgames", async (req, res) => {

    try {
        const games = await Game.find({})
        res.send(games)     
    } catch (error) {
        return res.status(400).json({message: error});        
    }
});

router.post("/addgame", async (req, res)=>{

    const game = req.body.game

    try {
        const newgame = new Game({
            name :game.name,
            image : game.image,
            platforms : ['PC','PS4','PS5'],
            description : game.description,
            category : game.category,
            prices : [game.prices]
        })
        await newgame.save()
        res.send('New Game Added Successfully')
    } catch (error) {
       return res.status(400).json({ message: error}) 
    }
})

router.post("/getgamebyid", async(req, res) => {

    const gameid = req.body.gameid
   
    try {
        const game = await Game.findOne({_id : gameid})
        res.send(game)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
     
   });

   router.post("/editgame", async(req, res) => {

    const editedgame = req.body.editedgame

    try {
        const game = await Game.findOne({_id : editedgame._id})
        
        game.name= editedgame.name,
        game.description= editedgame.description,
        game.image= editedgame.image,
        game.category=editedgame.category,
        game.prices = [editedgame.prices]

        await game.save()

        res.send('Game Details Edited successfully')

    } catch (error) {
        return res.status(400).json({ message: error });
    }
  
});

router.post("/deletegame", async(req, res) => {

    const gameid = req.body.gameid

  try {
    await Game.findOneAndDelete({_id : gameid})
    res.send('Game Deleted successfully')
  } catch (error) {
      return res.status(400).json({ message: error });
  }
  
});

module.exports = router;