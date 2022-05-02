const express = require('express');

const Game = require('./models/gameModel')


const app = express();
const db = require('./db.js')
app.use(express.json());

const path = require('path');
const gamesRoute = require('./routes/gamesRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')


app.use('/api/games/', gamesRoute);
app.use('/api/users/', userRoute);
app.use('/api/orders/', ordersRoute);



if(process.env.NODE_ENV ==='production')
{
    app.use('/' , express.static('frontend/build'))

    app.get('*' , (req , res)=>{

        res.sendFile(path.resolve(__dirname  , 'frontend/build/index.html'))

    })
}


const port =process.env.PORT || 8000;

app.listen(port, ()=> 'Server running on port port 🔥');