import { Router } from 'express';
import { addToCart, getCartItems, updateCartItem, removeFromCart } from '../controller/carrito.controller.js';
import { cartValidator } from '../validations/carritoValidator.js';
import { validationResult } from 'express-validator';

const router = Router();

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

router.post('/', cartValidator, validate, addToCart);
router.get('/', getCartItems);
router.put('/:id', cartValidator, validate, updateCartItem);
router.delete('/:id', removeFromCart);

export default router;
