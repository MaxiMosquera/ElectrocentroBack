import { DataTypes } from "sequelize";
import sequelize from '../dbconfig.js';


const Tipo_entrada = sequelize.define('tipo_entrada', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: true
    }


  }, {
    tableName: 'tipo_entrada',
    timestamps: true
  });
  
  export default Tipo_entrada;