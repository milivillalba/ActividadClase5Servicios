
import Carrito from '../models/Carrito.js';

// Agregar un producto al carrito
export const addToCart = async (req, res) => {
    try {
        const { userId, productId, cantidad } = req.body;
        const carrito = await Carrito.create({ userId, productId, cantidad });
        res.status(201).json(carrito);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener todos los artículos del carrito
export const getCartItems = async (req, res) => {
    try {
        const cartItems = await Carrito.findAll();
        res.status(200).json(cartItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un artículo en el carrito
export const updateCartItem = async (req, res) => {
    try {
        const carrito = await Carrito.findByPk(req.params.id);
        if (!carrito) return res.status(404).json({ message: 'No se encontro el articulo en el carrito' });
        await carrito.update(req.body);
        res.status(200).json(carrito);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un artículo del carrito
export const removeFromCart = async (req, res) => {
    try {
        const carrito = await Carrito.findByPk(req.params.id);
        if (!carrito) return res.status(404).json({ message: 'No se encontro el articulo en el carrito' });
        await carrito.destroy();
        res.status(200).json({ message: 'Articulo del carrito eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
