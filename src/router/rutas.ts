import { Router } from 'express';
import productoRoute from './productos.routes.js';
import userRoute from './user.router.js';
import carritoRoute from './carrito.router.js';

const router = Router();

router.use('/productos', productoRoute);
router.use('/users', userRoute);
router.use('/carrito', carritoRoute);

export default router;
