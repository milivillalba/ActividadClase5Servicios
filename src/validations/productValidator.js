import { body } from 'express-validator';


//Funcion para asegurar que los datos que se envian por el clientes cumplan con los requisitos antes que se procesen.
export const productValidator = [
  body('name')
  .notEmpty()//para verificar que el campo no este vacio.
  .withMessage('El nombre es obligatorio'),

  body('precio')
  .isFloat({ gt: 0 })//que sea decimal y mayor a 0.
  .withMessage('El precio debe ser mayor que 0'),

  body('stock')
  .isInt({ gt: 0 })//que sea entero y mayor a 0
  .withMessage('El stock debe ser mayor que 0'),
];