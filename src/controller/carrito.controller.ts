
import Carrito from '../models/Carrito';
import { Request,Response } from 'express';

// Agregar un producto al carrito
export const addToCart = async (req:Request, res:Response) => {
    try {
        const { userId, productId, cantidad } = req.body;
        const carrito = await Carrito.create({ userId, productId, cantidad });
        res.status(201).json(carrito);
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener todos los artículos del carrito
export const getCartItems = async (req:Request, res:Response) => {
    try {
        const cartItems = await Carrito.findAll();
        res.status(200).json(cartItems);
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un artículo en el carrito
export const updateCartItem = async (req:Request, res:Response) => {
    try {
        const carrito = await Carrito.findByPk(req.params.id);
        if (!carrito) return res.status(404).json({ message: 'No se encontro el articulo en el carrito' });
        await carrito.update(req.body);
        res.status(200).json(carrito);
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un artículo del carrito
export const removeFromCart = async (req:Request, res:Response) => {
    try {
        const carrito = await Carrito.findByPk(req.params.id);
        if (!carrito) return res.status(404).json({ message: 'No se encontro el articulo en el carrito' });
        await carrito.destroy();
        res.status(200).json({ message: 'Articulo del carrito eliminado' });
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
};
