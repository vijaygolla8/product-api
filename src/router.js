const { Router } = require('express');
const controllers = require('./controllers');

const router = Router();

router.post('/', controllers.createProduct);
router.get('/:productId', controllers.getProductById);
router.put('/:productId', controllers.updateProduct);
router.delete('*', (req, res) => res.status(405).send("Not allowed"));

module.exports = router;
