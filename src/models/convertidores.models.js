import { DataTypes } from "sequelize";
import sequelize from "../dbconfig.js";

const Convertidor = sequelize.define("convertidor", {
  referencia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  alimentacion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tension: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  corriente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  potencia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tamaño: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  serie: {
    type: DataTypes.ENUM("CFW300", "CFW500"),
    allowNull: false,
  },
});

export default Convertidor;
