
import User from '../models/User.js';

// Crear un nuevo usuario
export const createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Verificar que el rol sea válido
        const validRoles = ['cliente', 'vendedor', 'admin'];
        if (!validRoles.includes(role)) {
            return res.status(400).json({ message: 'Rol no válido' });
        }

        // Crear el usuario
        const user = await User.create({ name, email, password, role });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener todos los usuarios
export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un usuario por ID
export const getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//actualizacion
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password, role } = req.body;

        // Encontrar el usuario por ID
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Verificar que el rol sea válido (si se proporciona)
        const validRoles = ['cliente', 'vendedor', 'admin'];
        if (role && !validRoles.includes(role)) {
            return res.status(400).json({ message: 'Rol no válido' });
        }

        // Actualizar el usuario
        await user.update({ name, email, password, role });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Eliminar un usuario por ID
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        await user.destroy();
        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
