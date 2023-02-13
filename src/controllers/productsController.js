const productsController = {
    index: function(req, res) {
        res.send('Bienvenidos al listado de productos');
    },
    createProduct: (req, res) => {
        
    },
    productsDetail: function(req, res){
        res.send(`Bienvenidos al detalle del producto ${req.params.productId}`);
    },

    productsComment: function(req, res){
        if (req.params.commentsId == undefined) {
         res.send(`Bienvenidos a los comentarios del producto ${req.params.productId}`);
         } else {
             res.send(`Bienvenidos a los comentarios del producto ${req.params.productId} y estás en el comentario ${req.params.commentsId} de este producto`)
         }
     
     }
        
    };




module.exports = productsController;