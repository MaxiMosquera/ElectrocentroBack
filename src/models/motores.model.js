import { DataTypes } from "sequelize";
import sequelize from "../dbconfig.js";

const Motor = sequelize.define(
  "motor",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    linea: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    eficiencia: {
      type: DataTypes.STRING(65),
      allowNull: false,
    },
    material_carcasa: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    potencia_cv: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },
    potencia_kw: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },
    cuerpo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    codigo: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    precio: {
      type: DataTypes.DECIMAL(8, 2),
      allowNull: false,
    },
    velocidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    polos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    diametro_eje: {
      type: DataTypes.DECIMAL(4, 1),
      allowNull: true,
    },
    diametro_brida: {
      type: DataTypes.DECIMAL(5, 1),
      allowNull: true,
    },
    forma_constructiva: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tension: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    descuento_porcentaje: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    grado_ip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    /* —— NUEVO —— */
    out_of_stock: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: "motor",
    timestamps: true,
  }
);

export default Motor;
