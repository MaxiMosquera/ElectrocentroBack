import { DataTypes } from "sequelize";
import sequelize from '../dbconfig.js';


const Motor = sequelize.define('motor', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  linea: {
    type: DataTypes.STRING(15),
    allowNull: false
  },
  eficiencia: {
    type: DataTypes.STRING(65),
    allowNull: false
  },
  material_carcasa: {
    type: DataTypes.STRING(15),
    allowNull: false
    
  },
  potencia_cv: {
    type: DataTypes.DECIMAL(5,2), // por ejemplo, hasta 999.99
    allowNull: true
  },
  potencia_kw: {
    type: DataTypes.DECIMAL(5,2), // idem
    allowNull: true
  },
  cuerpo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  codigo: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  precio: {
    type: DataTypes.DECIMAL(8,2), // para almacenar valores como 14729.00
    allowNull: false
  },
  velocidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  polos: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  diametro_eje: {
    type: DataTypes.DECIMAL(4,1), // permite hasta 999.9, ajusta según tu necesidad
    allowNull: true
  },
  diametro_brida: {
    type: DataTypes.DECIMAL(5,1), // por ejemplo, si necesitas llegar a 660.0
    allowNull: true
  },
  forma_constructiva: {
    type: DataTypes.STRING,
    allowNull: true
  },
  tension: {
    type: DataTypes.STRING,
    allowNull: true
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: true
  },
  descuento_porcentaje: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: 'motor',
  timestamps: true
});

export default Motor;