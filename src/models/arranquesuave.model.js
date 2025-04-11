import { DataTypes } from "sequelize";
import sequelize from "../dbconfig.js";

const ArranqueSuave = sequelize.define("arranquesuave", {
  referencia: {                     /// nombre
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
    allowNull: false
  },
  tamaño: {
    type: DataTypes.INTEGER, ///1,2,3
    allowNull: false
  },
  modelo: {
    type: DataTypes.ENUM("SSW05", "SSW07","SSW900"),
    allowNull: false
  },
  price: {
   type: DataTypes.DECIMAL(10,2),
   allowNull: true
  },
  control: {
    type: DataTypes.INTEGER, //2 o 3
    allowNull: false
  }
});

export default ArranqueSuave;
