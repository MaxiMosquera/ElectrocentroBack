import { DataTypes } from "sequelize";
import sequelize from '../dbconfig.js';


const Eje_salida = sequelize.define('eje_salida', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING(65),
      allowNull: true
    },
    tamanio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 0
    },
      
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 0
    },
    


  }, {
    tableName: 'eje_salida',
    timestamps: true
  });
  
  export default Eje_salida;