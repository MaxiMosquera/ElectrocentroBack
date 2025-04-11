// controllers/pagos.controller.js

import { mercadoClient, Preference } from "../config/mercadoPago.js";
import dotenv from 'dotenv'
import Orden from "../models/orden.model.js";
import OrderProduct from "../models/orderProducts.model.js";

dotenv.config()

export const createPreference = async (req, res) => {
  try {
    const { items, metadata } = req.body;

    if (!Array.isArray(items)) {
      return res.status(400).json({ error: "La propiedad 'items' no es un arreglo" });
    }

    console.log(req.body,"bod")
    console.log(req.body.metadata.items,"met")

    // 1. Creamos la orden con estado "pending"
    const newOrder = await Orden.create({
      paymentId: null, // De momento no tenemos el ID de pago
      user_id: metadata.customer.id,
      finalPrice: parseFloat(metadata.total),
      discountPercentage: 0,
      status: "pending",
    });

    // 2. Creamos los productos de la orden (OrderProducts)
    for (const item of metadata.items) {
      let productType;
      switch (item.category) {
        case "motores":
          productType = "motor";
          break;
        case "reductores":
          productType = "reductor";
          break;
        case "convertidores":
          productType = "convertidor";
          break;
        case "arranqueSuave":
          productType = "arranqueSuave";
          break;
        default:
          productType = item.category; // O maneja un fallback
      }

      await OrderProduct.create({
        order_id: newOrder.id,
        product_id: item.id,
        product_type: productType,
        quantity: item.quantity,
        unitPrice: item.price,
        fijacion_salida_id: item?.eje_obj?.id || null,
        eje_salida_id: item?.eje_salida?.id || null,
        tipo_entrada_id: item?.tipo_entrada_obj?.id || null,
      });
    }

    // 3. Guardamos el orderId dentro de metadata para usarlo en el webhook
    metadata.orderId = newOrder.id;

    // 4. Creamos el objeto de preferencia de MP,
    //    incluyendo la metadata actualizada con el orderId
    const preferenceBody = {
      items: items.map((item) => ({
        title: item.name,
        quantity: item.quantity,
        unit_price: item.price || 1,
        currency_id: "ARS",
      })),
      back_urls: {
        success: `${process.env.FRONTEND_URL}/compra-exitosa`,
        failure: `${process.env.FRONTEND_URL}/compra-fallida`,
        pending: `${process.env.FRONTEND_URL}/pending`,
      },
      auto_return: "approved",
      metadata, // aquí ya va el "orderId" agregado
    };

    const preference = new Preference(mercadoClient);
    const result = await preference.create({ body: preferenceBody });

    // 5. Devolvemos la respuesta al frontend con la info de MercadoPago
    return res.json({ id: result.id, init_point: result.init_point });
  } catch (error) {
    console.error("Error al crear la preferencia:", error);
    return res.status(500).json({ error: "Error al crear la preferencia" });
  }
};
