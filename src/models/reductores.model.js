import { DataTypes } from "sequelize";
import sequelize from '../dbconfig.js';


const Reductor = sequelize.define('reductor', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  codigo: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tamanio: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  reduccion: {
    type: DataTypes.DECIMAL(5, 1),
    allowNull: false,

  },
  carcasa: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  motor: {
    type: DataTypes.DECIMAL(4, 2),
    allowNull: true
  },
  fs: {
    type: DataTypes.DECIMAL(4, 1),
    allowNull: true
  },
  fijacion_salida_id: {
    type: DataTypes.INTEGER, // Almacena la fecha de expiración del token
    default: 0,
    allowNull: false
  },
  eje_salida_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    default: 0
  },
  tipo_entrada_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    default: 0
  },
  precio: {
    type: DataTypes.DECIMAL(6, 2),
    allowNull: false
  },
  diametro_eje: {
    type: DataTypes.DECIMAL(5, 1),
    allowNull: true
  },
  descuento_porcentaje: {
    type: DataTypes.INTEGER,
    allowNull: true
  }


}, {
  tableName: 'reductor',
  timestamps: true
});

export default Reductor;