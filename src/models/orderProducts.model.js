import { DataTypes } from "sequelize";
import sequelize from "../dbconfig.js";

const OrderProduct = sequelize.define("order_product", {
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "ordenes", // Nombre de la tabla de las órdenes
      key: "id"
    }
  },
  // En vez de references, solo guardamos el ID y luego a nivel de lógica
  // decidimos a cuál tabla pertenece este product_id.
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  // Campo que indica la "tabla" a la que corresponde product_id
  product_type: {
    type: DataTypes.ENUM("motor", "reductor", "convertidor", "arranqueSuave"),
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  unitPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  tableName: "order_products",
  timestamps: true
});

export default OrderProduct;
