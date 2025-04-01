import ArranqueSuave from "../models/arranquesuave.model.js";
import Convertidor from "../models/convertidores.models.js";
import Eje_salida from "../models/ejeSalida.model.js";
import Fijacion_salida from "../models/fijacionSalida.model.js";
import Motor from "../models/motores.model.js";
import Orden from "../models/orden.model.js";
import OrderProduct from "../models/orderProducts.model.js";
import Reductor from "../models/reductores.model.js";

export const getOrderByPaymentId = async (req, res) => {
  console.log("gere")
  try {
    const { paymentId } = req.params;
    // Buscamos la orden que tenga el paymentId (se asume que se guardó como cadena)
    const order = await Orden.findOne({
      where: { paymentId },
      include: [
        {
          model: OrderProduct,
          as: "order_products",
        },
      ],
    });

    if (!order) {
      return res.status(404).json({ message: "Orden no encontrada." });
    }

    return res.json(order);
  } catch (error) {
    console.error("Error al obtener la orden:", error);
    return res.status(500).json({ error: "Error al obtener la orden." });
  }
};



export const getOrdersByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Orden.findAll({
      where: { user_id: userId },
      include: [
        {
          model: OrderProduct,
          as: 'order_products',
          include: [
            { model: Motor, as: 'motor', required: false },
            { model: Reductor, as: 'reductor', required: false },
            { model: ArranqueSuave, as: 'arranquesuave', required: false },
            { model: Convertidor, as: 'convertidor', required: false },
            { model: Eje_salida, as: 'eje_salida', required: false },
            { model: Fijacion_salida, as: 'fijacion_salida', required: false },
          ]
        }
      ]
    });

    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No se encontraron órdenes para este usuario." });
    }

    // Post-procesamiento: asignar la información del producto en un campo unificado 'product'
    orders.forEach(order => {
      order.order_products.forEach(op => {
        let product;
        switch (op.product_type) {
          case 'motor':
            product = op.motor;
            break;
          case 'reductor':
            product = op.reductor;
            break;
          case 'arranquesuave':
            product = op.arranquesuave;
            break;
          case 'convertidor':
            product = op.convertidor;
            break;
          case 'eje_salida':
            product = op.eje_salida;
            break;
          case 'fijacion_salida':
            product = op.fijacion_salida;
            break;
          default:
            product = null;
        }
        // Se agrega la propiedad 'product' para facilitar el consumo en el front
        op.dataValues.product = product;

        // Elimina los campos redundantes para evitar duplicación
        delete op.dataValues.motor;
        delete op.dataValues.reductor;
        delete op.dataValues.arranquesuave;
        delete op.dataValues.convertidor;
        delete op.dataValues.eje_salida;
        delete op.dataValues.fijacion_salida;
      });
    });

    return res.json(orders);
  } catch (error) {
    console.error("Error al obtener las órdenes por user id:", error);
    return res.status(500).json({ error: "Error al obtener las órdenes." });
  }
};
