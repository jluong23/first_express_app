const Item = require("../models/item");

const getAllItems = () => {
    return content;
    
}

const item_index = (req, res) => {
    Item.find().sort({createdAt: -1})
        .then((items) => {
            res.render('items/index', {items});
        })
        .catch((error) => console.log(error))
}

const item_details = (req,res) => {
    const id = req.params.id;
    Item.findById((id))
        .then((item) => {
            res.render('items/details', {item});
        })
        .catch((error) => res.status(404).render('404'))
}

const item_create_form = (req, res) => {
    res.render('items/create');
}

const item_create_post = (req, res) => { 
    if(req.body){
        const newItem = new Item(req.body);
        newItem.save()
            .then((result) => {
                // redirect to index page
                res.redirect('/');
            })
            .catch((error) => console.log(error))
    }
}

const item_delete = (req,res) => {
    const id = req.params.id;
    Item.findByIdAndDelete(id)
        .then(result => {
            // successfully deleted, return redirect link back to browser
            res.json(
                {
                redirect: '/', 
                }
            );
        })
        .catch((error) => console.log(error))
}

module.exports = {
    item_index, item_details, item_create_post, item_create_form, item_delete

}