import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';
import User from './User.js';
import Product from './Product.js';

const CompVent = sequelize.define('CompVenta', {
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,// no puede ser nulo
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
//relacion donde cada compra y venta esta asociado a un usuario.
CompVent.belongsTo(User, { as: 'user' });
//relacion donde cada copra y venta esta asociada a un producto
CompVent.belongsTo(Product, { as: 'product' });

export default CompVent;
