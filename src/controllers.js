const Product = require('./product');
const ProductDao = require('./products.dao');
ProductDao.initaliseDB(); // initialising in memory data.

const getProductById = (req, res) => {
    console.log('Got a GET request');
    const product = ProductDao.getProductById(req.params.productId);
    if (product) {
        console.log(product);
        res.status(200).send(product);
    } else {
        res.status(404).json({ Error: 'Product not found' });
    }
}

const createProduct = (req, res) => {
    const { error } = Product.productSchema.validate(req.body);
    if (error) {
        res.status(400).json({ Error: 'Invalid input', ErrorDetails: error });
        return;
    }
    try {
        const newProduct = ProductDao.createProduct(new Product(req.body.stock_number, req.body.name, req.body.Description, req.body.Price));
        res.status(201).send(newProduct);
    } catch (e) {
        res.status(400).json({ Error: e });
    }
}

const updateProduct = (req, res) => {
    console.log('in update function' + JSON.stringify(req.params));
    try {
        const updatedProduct = ProductDao.updateProduct(new Product(req.body.stock_number, req.body.name, req.body.Description, req.body.Price));
        res.status(200).send(updatedProduct);
    } catch (e){
        res.status(404).json({ Error: e });
    }

}

module.exports = { getProductById, updateProduct, createProduct };
