const express = require('express');
const router = express.Router();


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

router.get('/create', (req, res) => {
    res.render('create');
})

router.get('/', (req,res) => {
    res.render('index', {content: content});
  })
  

router.get('/:id', (req,res) => {
    const id = req.params.id;
    let item = content.find((item) => item.id == id);
    res.render('details', {item});
})

router.delete('/:id', (req,res) => {
    const id = req.params.id;
    // update content to exclude the deleted item
    content = content.filter((item) => item.id != id);
    res.json(
        {
        redirect: '/', 
        }
    );
})


router.post('/create', (req, res) => { 
    if(req.body){
        // add id
        req.body["id"] = content.length + 1;
        // save content
        content.push(req.body);
        // redirect to index page
        res.redirect('/');
    }
})

module.exports = router;