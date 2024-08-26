import { body } from 'express-validator';

export const cartValidator = [
    body('userId').isInt({ gt: 0 }).withMessage('El ID del usuario debe ser un número positivo'),
    body('productId').isInt({ gt: 0 }).withMessage('El ID del producto debe ser un número positivo'),
    body('cantidad').isInt({ gt: 0 }).withMessage('La cantidad debe ser un número entero positivo'),
];
