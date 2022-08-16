// uses express
const express = require('express');
const morgan = require('morgan');
const app = express()
app.set('view engine', 'ejs');
const port = 3000

app.use(morgan('tiny')); //middleware extension for logging
app.use(express.static('public')) //allow use of static files in /public
app.use(express.urlencoded({extended: true})); //middleware for accepting form data (/new)

let content = [
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
  res.render('index', {content: content});
})

app.get('/new', (req, res) => {
  res.render('new');
})

app.post('/new', (req, res) => { 
  // save content
  content.push(req.body);
  // redirect to index page
  res.redirect('/');
})

// 404 page
app.use('', (req, res) => {
    res.status(404).render('404');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})