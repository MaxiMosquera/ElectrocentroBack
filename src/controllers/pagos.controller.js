// controllers/pagos.controller.js

import { mercadoClient, Preference } from "../config/mercadoPago.js";
import dotenv from 'dotenv'
import Orden from "../models/orden.model.js";
import OrderProduct from "../models/orderProducts.model.js";

dotenv.config()

  export const createPreference = async (req, res) => {
  try {
    /* -------------------------------------------
       1. Validar body
    ------------------------------------------- */
    const { items, metadata } = req.body;
    if (!Array.isArray(items)) {
      return res
        .status(400)
        .json({ error: "'items' debe ser un arreglo" });
    }

    /* -------------------------------------------
       2. Crear la orden en la base
    ------------------------------------------- */
    const newOrder = await Orden.create({
      paymentId: null,                         // se completa vía webhook
      user_id: metadata.customer.id,
      finalPrice: parseFloat(metadata.total),
      discountPercentage: 0,
      status: "pending",

      /*  datos de factura  */
      invoiceType: metadata.invoiceType,
      taxId: metadata.taxId || null,
      docNumber: metadata.docNumber || null
    });

    /* -------------------------------------------
       3. Registrar cada producto
    ------------------------------------------- */
    for (const item of metadata.items) {
      const map = {
        motores: "motor",
        reductores: "reductor",
        convertidores: "convertidor",
        arranqueSuave: "arranqueSuave"
      };

      await OrderProduct.create({
        order_id: newOrder.id,
        product_id: item.id,
        product_type: map[item.category] || item.category,
        quantity: item.quantity,
        unitPrice: item.price,
        fijacion_salida_id: item?.eje_obj?.id ?? null,
        eje_salida_id: item?.eje_salida?.id ?? null,
        tipo_entrada_id: item?.tipo_entrada_obj?.id ?? null
      });
    }

    /* -------------------------------------------
       4. Añadir orderId a la metadata de MP
    ------------------------------------------- */
    metadata.orderId = newOrder.id;

    /* -------------------------------------------
       5. Armar preferencia de Mercado Pago
    ------------------------------------------- */
    const preferenceBody = {
      items: items.map((it) => ({
        title: it.name,
        quantity: it.quantity,
        unit_price: it.price || 1,
        currency_id: "ARS"
      })),
      back_urls: {
        success: `${process.env.FRONTEND_URL}/compra-exitosa`,
        failure: `${process.env.FRONTEND_URL}/compra-fallida`,
        pending: `${process.env.FRONTEND_URL}/pending`
      },
      metadata
    };

    /* auto_return sólo si FRONTEND_URL no es localhost */
    if (!process.env.FRONTEND_URL.includes("localhost")) {
      preferenceBody.auto_return = "approved";
    }

    const preference = new Preference(mercadoClient);
    const { id, init_point } = await preference.create({ body: preferenceBody });

    /* -------------------------------------------
       6. Responder al frontend
    ------------------------------------------- */
    return res.json({ id, init_point });
  } catch (err) {
    console.error("Error al crear la preferencia:", err);
    return res
      .status(500)
      .json({ error: "Error al crear la preferencia" });
  }
};
