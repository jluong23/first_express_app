// uses express
const express = require('express');
const morgan = require('morgan');
const app = express()
app.set('view engine', 'ejs');
const port = 3000

app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/new', (req, res) => {
  res.render('new');
})

// 404 page
app.use('', (req, res) => {
    res.status(404).render('404');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})