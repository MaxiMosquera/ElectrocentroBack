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
  codigo: {
    type: DataTypes.INTEGER,
    allowNull: false
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
  frenado_incluido: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  modelo: {
    type: DataTypes.ENUM("CFW300", "CFW500"),
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: true
   }
});

export default Convertidor;
