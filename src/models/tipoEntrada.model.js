import { DataTypes } from "sequelize";
import sequelize from '../dbconfig.js';


const Tipo_entrada = sequelize.define('tipo_entrada', {
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
      type: DataTypes.STRING,
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
    tableName: 'tipo_entrada',
    timestamps: true
  });
  
  export default Tipo_entrada;