import { mercadoClient, Preference } from "../config/mercadoPago.js";

export const createPreference = async (req, res) => {
  try {
    const body = {
      items: req.body.map((item) => ({
        title: item.name,
        quantity: item.quantity,
        unit_price: item.price,
        currency_id: "ARS",
      })),
      back_urls: {
        success: "http://localhost:5173/success",
        failure: "http://localhost:5173/failure",
        pending: "http://localhost:5173/pending",
      },
      auto_return: "approved",
    };

    const preference = new Preference(mercadoClient);
    const result = await preference.create({ body });

    res.json({ id: result.id});
  } catch (error) {
    console.error("Error al crear la preferencia:", error);
    res.status(500).json({ error: "Error al crear la preferencia" });
  }
};
