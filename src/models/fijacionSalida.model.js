import { DataTypes } from "sequelize";
import sequelize from '../dbconfig.js';


const Fijacion_salida = sequelize.define('fijacion_salida', {
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
    tableName: 'fijacion_salida',
    timestamps: true
  });
  
  export default Fijacion_salida;