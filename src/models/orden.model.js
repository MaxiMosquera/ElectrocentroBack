import { DataTypes } from "sequelize";
import sequelize from "../dbconfig.js";

const Orden = sequelize.define(
  "orden",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    /* ──────────── DATOS DE MERCADO PAGO ──────────── */
    paymentId: {
      type: DataTypes.STRING,            // ID de MP cuando se confirme
      allowNull: true
    },

    /* ──────────── USUARIO ──────────── */
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    /* ──────────── IMPORTE ──────────── */
    finalPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    discountPercentage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    /* ──────────── ESTADO DE LA ORDEN ──────────── */
    status: {
      type: DataTypes.STRING,            // pending | paid | cancelled …
      allowNull: false
    },

    /* ──────────── FACTURACIÓN ──────────── */
    invoiceType: {
      type: DataTypes.STRING,            // “A”, “B”, “C”, “E”
      allowNull: false
    },
    taxId: {
      type: DataTypes.STRING,            // CUIT para factura A
      allowNull: true
    },
    docNumber: {
      type: DataTypes.STRING,            // DNI / CUIT opcional para B | C
      allowNull: true
    }
  },
  {
    tableName: "ordenes",
    timestamps: true
  }
);

export default Orden;
