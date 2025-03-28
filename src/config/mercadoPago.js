import { Preference, MercadoPagoConfig } from "mercadopago";
import dotenv from "dotenv";

dotenv.config();

const mercadoClient = new MercadoPagoConfig({
  accessToken: process.env.ACCESS_TOKEN_PRUEBA
});

export { mercadoClient, Preference };
