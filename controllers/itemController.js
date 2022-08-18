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

const getAllItems = () => {
    return content;
}

const item_index = (req, res) => {

    res.render('items/index', {items: getAllItems()});

}

const item_details = (req,res) => {
    const id = req.params.id;
    let item = getAllItems().find((item) => item.id == id);
    res.render('items/details', {item});
}

const item_create_form = (req, res) => {
    res.render('items/create');

}

const item_create_post = (req, res) => { 
    let items = getAllItems();
    if(req.body){
        // add id
        req.body["id"] = items.length + 1;
        // save
        items.push(req.body);
        // redirect to index page
        res.redirect('/');
    }
}

const item_delete = (req,res) => {
    const id = req.params.id;
    // update content to exclude the deleted item
    content = content.filter((item) => item.id != id);
    res.json(
        {
        redirect: '/', 
        }
    );
}

module.exports = {
    item_index, item_details, item_create_post, item_create_form, item_delete

}