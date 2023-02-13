const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send('Bienvenidos al listado de productos');
})

router.get('/:productId', function(req, res){
    res.send(`Bienvenidos al detalle del producto ${req.params.productId}`);
});

router.get('/:productId/comments/:commentsId?'
, function(req, res){
   if (req.params.commentsId == undefined) {
    res.send(`Bienvenidos a los comentarios del producto ${req.params.productId}`);
    } else {
        res.send(`Bienvenidos a los comentarios del producto ${req.params.productId} y estás en el comentario ${req.params.commentsId} de este producto`)
    }

});

module.exports = router;
