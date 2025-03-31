import Orden from "../models/orden.model.js";
import OrderProduct from "../models/orderProducts.model.js";

export const getOrderByPaymentId = async (req, res) => {
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
  console.log(req.body, "req")
  try {
    const { userId } = req.params;
    console.log(userId, "id")
    const orders = await Orden.findAll({
      where: { user_id: userId },
      include: [
        {
          model: OrderProduct,
          as: "order_products",
        },
      ],
    });

    console.log(orders, "order")

    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No se encontraron órdenes para este usuario." });
    }

    return res.json(orders);
  } catch (error) {
    console.error("Error al obtener las órdenes por user id:", error);
    return res.status(500).json({ error: "Error al obtener las órdenes." });
  }
};