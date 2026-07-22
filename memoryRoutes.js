
const express = require('express');
const router = express.Router();
const memoryController = require('../controllers/memoryControllers');


router.get('/', memoryController.memory_index);
router.get('/create', memoryController.memory_create_get);
router.post('/', memoryController.memory_create_post);
router.get('/:id', memoryController.memory_details);
router.delete('/:id', memoryController.memory_delete);

module.exports = router;
