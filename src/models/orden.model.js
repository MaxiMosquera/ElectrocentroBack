import { DataTypes } from "sequelize";
import sequelize from '../dbconfig.js';

const Orden = sequelize.define("orden", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  paymentId: { 
    type: DataTypes.STRING, // Almacena el identificador de la transacción de Mercado Pago
    allowNull: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  finalPrice: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  },
  discountPercentage: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING, // Por ejemplo: "pending", "paid", "cancelada"
    allowNull: false
  }
}, {
  tableName: "ordenes",
  timestamps: true
});

export default Orden;
