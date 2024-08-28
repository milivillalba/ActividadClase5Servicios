import { body } from 'express-validator';

export const userValidator = [
    body('name').notEmpty().withMessage('El nombre es obligatorio'),
    body('email').isEmail().withMessage('El email debe ser válido'),
    body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    body('role').isIn(['cliente', 'vendedor', 'admin']).withMessage('El rol debe ser uno de los siguientes: cliente, vendedor, admin'),
];
