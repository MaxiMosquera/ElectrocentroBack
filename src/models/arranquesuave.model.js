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
    type: DataTypes.INTEGER, ///1,2,3
    allowNull: false,
  },
  serie: {
    type: DataTypes.ENUM("SSW05", "SSW07","SSW900"),
    allowNull: false,
  },
});

export default ArranqueSuave;
