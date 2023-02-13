const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.index)

router.get('/:productId', productsController.productsDetail);

router.get('/:productId/comments/:commentsId?',productsController.productsComment);

module.exports = router;
