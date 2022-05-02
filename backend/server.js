const express = require('express');

const Game = require('./models/gameModel')


const app = express();
const db = require('./db.js')
app.use(express.json());

const gamesRoute = require('./routes/gamesRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')

app.use('/api/games/', gamesRoute);
app.use('/api/users/', userRoute);
app.use('/api/orders/', ordersRoute);
app.get("/", (req, res) => {
    res.send("Server working 🔥" + port);
});

// app.get("/getgames", (req, res) => {
//     Game.find({}, (err , docs)=>{
        
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.send(docs)
//         }
//     })
// })

const port =process.env.PORT || 8000;

app.listen(port, ()=> 'Server running on port port 🔥');