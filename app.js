// uses express
const express = require('express');
const morgan = require('morgan');
const app = express()
app.set('view engine', 'ejs');
const port = 3000

app.use(morgan('tiny')); //middleware extension for logging
app.use(express.static('public')) //allow use of static files in /public
app.use(express.urlencoded({extended: true})); //middleware for accepting form data

let content = [
  {
    id: 1,
    title: "Item 1",
    description: "Test 1"
  },
  {
    id: 2,
    title: "Item 2",
    description: "Test 2"
  }
];

app.get('/', (req, res) => {
  res.redirect('/item');
})

app.get('/item', (req,res) => {
  res.render('index', {content: content});
})

app.get('/item/create', (req, res) => {
  res.render('create');
})

app.get('/item/:id', (req,res) => {
  const id = req.params.id;
  let item = content.find((item) => item.id == id);
  res.render('details', {item});
})

app.delete('/item/:id', (req,res) => {
  const id = req.params.id;
  // update content to exclude the deleted item
  content = content.filter((item) => item.id != id);
  res.json(
    {
      redirect: '/', 
    }
  );
})


app.post('/item/create', (req, res) => { 
  if(req.body){
    // add id
    req.body["id"] = content.length + 1;
    // save content
    content.push(req.body);
    // redirect to index page
    res.redirect('/');
  }
})

// 404 page
app.use('', (req, res) => {
    res.status(404).render('404');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})