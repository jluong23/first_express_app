const express = require('express');
const router = express.Router();
const itemController = require("../controllers/itemController");

router.get('/create', itemController.item_create_form);

router.get('/', itemController.item_index);
  
router.get('/:id', itemController.item_details);

router.delete('/:id', itemController.item_delete)

router.post('/create', itemController.item_create_post);

module.exports = router;