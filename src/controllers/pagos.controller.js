import { mercadoClient, Preference } from "../config/mercadoPago.js";

export const createPreference = async (req, res) => {
  try {
    // Se asume que el body recibido es un objeto con las propiedades "items" y "metadata"
    const itemsArray = req.body.items;
    if (!Array.isArray(itemsArray)) {
      throw new Error("La propiedad items no es un arreglo");
    }

    // Extraemos la metadata con los datos de la orden (si se envió)
    const metadata = req.body.metadata;
    console.log(metadata,"METADATA")

    const body = {
      items: itemsArray.map((item) => ({
        title: item.name,
        quantity: item.quantity,
        unit_price: item.price,
        currency_id: "ARS",
      })),
      back_urls: {
        success: "http://localhost:5173/compra-exitosa",
        failure: "http://localhost:5173/compra-fallida",
        pending: "http://localhost:5173/pending",
      },
      auto_return: "approved",
      // Incluimos la metadata para que se reciba en el webhook
      metadata,
    };

    const preference = new Preference(mercadoClient);
    const result = await preference.create({ body });

    res.json({ id: result.id, init_point: result.init_point });
  } catch (error) {
    console.error("Error al crear la preferencia:", error);
    res.status(500).json({ error: "Error al crear la preferencia" });
  }
};
