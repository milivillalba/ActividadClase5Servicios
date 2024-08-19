import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';
import User from './User.js';
import Product from './Product.js';

const Carrito = sequelize.define('Carrito', {
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

//relacion donde cada carrito esta asociado con un usuaario.
Carrito.belongsTo(User, { as: 'user' });
//cada carrito esta asociado a un producto.
Carrito.belongsTo(Product, { as: 'product' });

export default Carrito;
