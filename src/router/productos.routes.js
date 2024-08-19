import { Router } from 'express';
import { createProduct, getProducts, updateProduct, deleteProduct } from '../controller/productos.controllers.js';
import { productValidator } from '../validations/productValidator.js';
import { validationResult } from 'express-validator';
import { checkAdmin } from '../middleware/checkAdmin.js'; // Importa el nuevo middleware

const router = Router();

const validate = (req, res, next) => {
  const errors = validationResult(req); // Obtén los errores de validación acumulados en la solicitud
  if (!errors.isEmpty()) { // Si hay un error, muéstralo
    return res.status(400).json({ errors: errors.array() });
  }
  next(); // Si no hay errores, continúa con la ejecución
};

// Usa el middleware checkAdmin para verificar que el usuario es administrador antes de permitir la creación de productos
router.post('/', productValidator, validate, checkAdmin, createProduct);
router.get('/', getProducts);
router.put('/:id', productValidator, validate, checkAdmin, updateProduct);
router.delete('/:id', checkAdmin, deleteProduct);

export default router;
