import { DataTypes } from "sequelize";
import sequelize from '../dbconfig.js';

const Orden = sequelize.define("orden", {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  finalPrice: {
    type: DataTypes.DECIMAL(10,2),  // Hasta 99999999.99
    allowNull: false
  },
  discountPercentage: {
    type: DataTypes.INTEGER,  // Si es un porcentaje (0-100)
    allowNull: true
  },
  status: {
    type: DataTypes.STRING, //pendiente,paga,cancelada
    allowNull: false
  }
}, {
  timestamps: true
});

export default Orden;
