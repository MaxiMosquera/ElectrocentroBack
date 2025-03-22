import { DataTypes } from "sequelize";
import sequelize from '../dbconfig.js';


const Usuario = sequelize.define('usuario', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },    
    direccion: {
      type: DataTypes.STRING,
      allowNull: true
    } 
  }, {
    tableName: 'usuario',
    timestamps: true    
  });
  
  export default Usuario;  
    