// uses express
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('./views/index.html', {root: __dirname});
})

app.get('/contact', (req, res) => {
    res.sendFile('./views/contact.html', {root: __dirname});
})

// redirects
app.get('/contact-us', (req, res) => {
    res.redirect('/contact');
});

// 404 page
app.use('', (req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})