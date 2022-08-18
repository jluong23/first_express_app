// uses express
const express = require('express');
const morgan = require('morgan');
const itemRoutes = require('./routes/itemRoutes');
const app = express()
app.set('view engine', 'ejs');
const port = 3000

app.use(morgan('tiny')); //middleware extension for logging
app.use(express.static('public')) //allow use of static files in /public
app.use(express.urlencoded({extended: true})); //middleware for accepting form data

app.get('/', (req, res) => {
  res.redirect('/items');
})

app.use('/items', itemRoutes);

// 404 page
app.use('', (req, res) => {
    res.status(404).render('404');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})