// uses express
const express = require('express');
const morgan = require('morgan');
const app = express()
app.set('view engine', 'ejs');
const port = 3000
app.use(morgan('tiny')); //middleware extension
app.use(express.static('public')) //allow use of static files in /public
const content = [
  {
    title: "Item 1",
    description: "Test 1"
  },
  {
    title: "Item 2",
    description: "Test 2"
  }
];

app.get('/', (req, res) => {
  console.log(content);
  res.render('index', {content: content});
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