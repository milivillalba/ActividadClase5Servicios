import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';
import User from './User.js';
import Product from './Product.js';

const Carrito = sequelize.define('Carrito', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Cart.belongsTo(User, { as: 'user' });
Cart.belongsTo(Product, { as: 'product' });

export default Carrito;
