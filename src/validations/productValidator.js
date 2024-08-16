import { body } from 'express-validator';

export const productValidator = [
  body('name').notEmpty().withMessage('El nombre es obligatorio'),
  body('price').isFloat({ gt: 0 }).withMessage('El precio debe ser mayor que 0'),
  body('stock').isInt({ gt: 0 }).withMessage('El stock debe ser mayor que 0'),
];