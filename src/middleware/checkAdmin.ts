import User from '../models/User.js';

// funcion para verificar si el usuario es un administrador
export const checkAdmin = async (req, res, next) => {
  const { userId } = req.body; // Obtén el ID del usuario del cuerpo de la solicitud

  if (!userId) return res.status(400).json({ message: 'ID del usuario requerido' });

  try {
    // Buscar al usuario en la base de datos
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    if (user.role !== 'admin') return res.status(403).json({ message: 'Acceso prohibido' });

    // Si el rol es válido, continúa con la siguiente función en la cadena de middleware
    req.user = user; 
    next();
  } catch (err) {
    res.status(500).json({ message: 'Error en el servidor', error: err });
  }
};
