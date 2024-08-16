import { Router } from 'express';
import { createProduct, getProducts, updateProduct, deleteProduct } from '../controller/productos.controllers.js';
import { productValidator } from '../validations/productValidator.js';
import { validationResult } from 'express-validator';

const router = Router();

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

router.post('/productos', productValidator, validate, createProduct);
router.get('/productos', getProducts);
router.put('/productos/:id', productValidator, validate, updateProduct);
router.delete('/productos/:id', deleteProduct);

export default router;
