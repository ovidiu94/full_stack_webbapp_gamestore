const express = require('express');

const Game = require('./models/gameModel')

const port =process.env.PORT || 8000;
const app = express();
const db = require('../backend/db.js')
app.use(express.json());

const path = require('path');
const gamesRoute = require('../backend/routes/gamesRoute.js')
const userRoute = require('../backend/routes/userRoute.js')
const ordersRoute = require('../backend/routes/ordersRoute.js')


app.use('/api/games/', gamesRoute);
app.use('/api/users/', userRoute);
app.use('/api/orders/', ordersRoute);


if(process.env.NODE_ENV=='production'){
    app.use(express.static("frontend/build"))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}




app.listen(port, ()=> 'Server running on port port 🔥');