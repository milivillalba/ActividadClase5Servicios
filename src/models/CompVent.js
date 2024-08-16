import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';
import User from './User.js';
import Product from './Product.js';

const CompVent = sequelize.define('CompVenta', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Pendiente', 'Completa', 'Cancelada'),
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('compra', 'venta'),
    allowNull: false,
  },
});

Order.belongsTo(User, { as: 'user' });
Order.belongsTo(Product, { as: 'product' });

export default CompVent;
