// uses express
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/itemRoutes');
const Item = require('./models/item');
const app = express()
app.set('view engine', 'ejs');
const port = 3000

app.use(morgan('tiny')); //middleware extension for logging
app.use(express.static('public')) //allow use of static files in /public
app.use(express.urlencoded({extended: true})); //middleware for accepting form data

// connect to mongoDB, loading credentials from .env
require('dotenv').config();
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbURI = `mongodb+srv://${dbUser}:${dbPassword}@nodetest.ycbuew5.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(dbURI)
  .then((result) => {
    console.log("connected to db");
    app.listen(port);
  })
  .catch((error) => console.log(error));


app.get('/', (req, res) => {
  res.redirect('/items');
})

app.use('/items', itemRoutes);

// 404 page
app.use('', (req, res) => {
    res.status(404).render('404');
});