import Eje_salida from "../models/ejeSalida.model.js"
import Fijacion_salida from "../models/fijacionSalida.model.js"
import Tipo_entrada from "../models/tipoEntrada.model.js"
import { sendMail } from "../services/mail.service.js"
import { generateToken } from "../utils/token.js"
import dotenv from "dotenv"

dotenv.config()

// Company info for templates
const COMPANY_NAME = "Motores & Reductores"
const COMPANY_LOGO = "https://your-logo-url.com/logo.png" // Replace with your actual logo URL
const PRIMARY_COLOR = "#0056b3"
const SECONDARY_COLOR = "#f8f9fa"
const FOOTER_COLOR = "#343a40"

// Base email template with styling
const baseEmailTemplate = (content, title) => `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    .header {
      background-color: ${PRIMARY_COLOR};
      color: white;
      padding: 20px;
      text-align: center;
    }
    .logo {
      max-width: 150px;
      height: auto;
    }
    .content {
      padding: 30px;
    }
    .footer {
      background-color: ${FOOTER_COLOR};
      color: white;
      text-align: center;
      padding: 15px;
      font-size: 12px;
    }
    .button {
      display: inline-block;
      background-color: ${PRIMARY_COLOR};
      color: white;
      text-decoration: none;
      padding: 12px 25px;
      border-radius: 4px;
      margin: 20px 0;
      font-weight: bold;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    table, th, td {
      border: 1px solid #ddd;
    }
    th {
      background-color: ${PRIMARY_COLOR};
      color: white;
      padding: 10px;
      text-align: left;
    }
    td {
      padding: 10px;
    }
    tr:nth-child(even) {
      background-color: ${SECONDARY_COLOR};
    }
    .details-row {
      background-color: #f9f9f9;
    }
    .details-row td {
      padding: 15px;
    }
    .highlight {
      background-color: #fffde7;
      padding: 15px;
      border-left: 4px solid #ffd600;
      margin: 15px 0;
    }
    @media only screen and (max-width: 600px) {
      .container {
        width: 100%;
      }
      .content {
        padding: 15px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="${COMPANY_LOGO}" alt="${COMPANY_NAME}" class="logo">
      <h1>${title}</h1>
    </div>
    <div class="content">
      ${content}
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} ${COMPANY_NAME}. Todos los derechos reservados.</p>
      <p>Si no solicitaste este correo, por favor ignóralo.</p>
    </div>
  </div>
</body>
</html>
`

// 📩 Recuperar contraseña
export const resetPassword = async (req, res) => {
  const { email } = req.body
  try {
    const token = generateToken(email, "15m")
    const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}`

    const content = `
      <p>Hemos recibido una solicitud para restablecer la contraseña de tu cuenta.</p>
      <p>Si no has solicitado este cambio, puedes ignorar este correo.</p>
      
      <div style="text-align: center;">
        <a href="${resetLink}" class="button">Restablecer Contraseña</a>
      </div>
      
      <div class="highlight">
        <p>Este enlace expirará en 15 minutos por razones de seguridad.</p>
        <p>Si el botón no funciona, copia y pega el siguiente enlace en tu navegador:</p>
        <p style="word-break: break-all;">${resetLink}</p>
      </div>
    `

    const html = baseEmailTemplate(content, "Recuperación de Contraseña")
    await sendMail(email, "Recuperar Contraseña", html)
    res.json({ message: "Correo de recuperación enviado" })
  } catch (error) {
    res.status(500).json({ error: "Error enviando correo" })
  }
}

// 📩 Confirmación de registro
export const confirmRegister = async (req, res) => {
  const { email, name } = req.body
  try {
    const token = generateToken(email, "24h")
    const confirmLink = `${process.env.FRONTEND_URL}/confirm?token=${token}`

    const content = `
      <p>¡Hola ${name || ""}!</p>
      <p>Gracias por registrarte en ${COMPANY_NAME}. Estamos emocionados de tenerte con nosotros.</p>
      <p>Para completar tu registro y activar tu cuenta, por favor haz clic en el siguiente botón:</p>
      
      <div style="text-align: center;">
        <a href="${confirmLink}" class="button">Confirmar mi cuenta</a>
      </div>
      
      <div class="highlight">
        <p>Este enlace expirará en 24 horas.</p>
        <p>Si el botón no funciona, copia y pega el siguiente enlace en tu navegador:</p>
        <p style="word-break: break-all;">${confirmLink}</p>
      </div>
      
      <p>Si no has creado esta cuenta, puedes ignorar este correo.</p>
    `

    const html = baseEmailTemplate(content, "Confirma tu Registro")
    await sendMail(email, "Confirmación de Registro", html)
    res.json({ message: "Correo de confirmación enviado" })
  } catch (error) {
    res.status(500).json({ error: "Error enviando correo" })
  }
}

// 📩 Formulario de contacto
export const contactForm = async (req, res) => {
  const { email, name, message } = req.body
  console.log(req.body, "body")
  try {
    const content = `
      <h2>Nueva consulta recibida</h2>
      
      <table>
        <tr>
          <th style="width: 30%;">Nombre</th>
          <td>${name}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td><a href="mailto:${email}">${email}</a></td>
        </tr>
      </table>
      
      <h3>Mensaje:</h3>
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; border-left: 4px solid ${PRIMARY_COLOR};">
        ${message.replace(/\n/g, "<br>")}
      </div>
      
      <p style="margin-top: 20px;">Recuerda responder a esta consulta lo antes posible.</p>
    `

    const html = baseEmailTemplate(content, "Nueva Consulta de Cliente")
    await sendMail(process.env.CORPORATE_EMAIL, "Nueva Consulta", html)
    res.json({ message: "Consulta enviada correctamente" })
  } catch (error) {
    res.status(500).json({ error: "Error enviando correo" })
  }
}

// 📩 Confirmación de compra para el cliente
export const purchaseConfirmation = async (req, res) => {
  const { name, email, orderDetails } = req.body
  try {
    const content = `
      <p>¡Hola ${name}!</p>
      <p>Gracias por tu compra en ${COMPANY_NAME}. Hemos recibido tu pedido correctamente.</p>
      
      <div class="highlight">
        <h3>Detalles de tu pedido:</h3>
        ${orderDetails}
      </div>
      
      <p>Recibirás actualizaciones sobre el estado de tu pedido en este correo electrónico.</p>
      <p>Si tienes alguna pregunta sobre tu compra, no dudes en contactarnos respondiendo a este correo o a través de nuestro formulario de contacto en el sitio web.</p>
      
      <div style="text-align: center; margin-top: 30px;">
        <p>¡Gracias por confiar en nosotros!</p>
      </div>
    `

    const html = baseEmailTemplate(content, "Confirmación de tu Compra")
    await sendMail(email, "Detalles de tu Compra", html)
    res.json({ message: "Correo de confirmación de compra enviado" })
  } catch (error) {
    res.status(500).json({ error: "Error enviando correo de confirmación de compra" })
  }
}

// 📩 Notificación de nueva venta para el dueño de la tienda
export const newOrderNotification = async (orderData, items, customerInfo) => {
  try {
    const storeOwnerEmail = "ramiro.alet@gmail.com";

    // Fetch additional data for all items that need it
    const enhancedItems = await Promise.all(
      items.map(async (item) => {
        // Crear una copia del item para evitar modificar el original
        const enhancedItem = { ...item };

        console.log("Item recibido:", item);
        if (item.category === "reductores") {
          // Fetch eje_salida details usando eje_obj, ya que es el que tiene id y la info
          if (item.eje_obj && item.eje_obj.id) {
            console.log("Fetching eje_salida details");
            try {
              const ejeData = await Eje_salida.findByPk(item.eje_obj.id);
              if (ejeData) {
                enhancedItem.eje_salida_details = {
                  codigo: ejeData.codigo,
                  tipo: ejeData.tipo,
                  tamanio: ejeData.tamanio,
                  precio: ejeData.precio,
                };
              }
              console.log(enhancedItem, "enhanced eje_salida details");
            } catch (error) {
              console.error("Error fetching eje_salida details:", error);
            }
          }

          // Fetch fijacion_salida details usando fijacion_obj
          if (item.fijacion_obj && item.fijacion_obj.id) {
            console.log("Fetching fijacion_salida details");
            try {
              const fijacionData = await Fijacion_salida.findByPk(item.fijacion_obj.id);
              if (fijacionData) {
                enhancedItem.fijacion_details = {
                  codigo: fijacionData.codigo,
                  tipo: fijacionData.tipo,
                  tamanio: fijacionData.tamanio,
                  precio: fijacionData.precio,
                };
              }
              console.log(enhancedItem, "enhanced fijacion details");
            } catch (error) {
              console.error("Error fetching fijacion_salida details:", error);
            }
          }

          // Fetch tipo_entrada details usando tipo_entrada_obj
          if (item.tipo_entrada_obj && item.tipo_entrada_obj.id) {
            console.log("Fetching tipo_entrada details");
            try {
              const tipoEntradaData = await Tipo_entrada.findByPk(item.tipo_entrada_obj.id);
              if (tipoEntradaData) {
                enhancedItem.tipo_entrada_details = {
                  tipo: tipoEntradaData.tipo,
                };
              }
              console.log(enhancedItem, "enhanced tipo_entrada details");
            } catch (error) {
              console.error("Error fetching tipo_entrada details:", error);
            }
          }
        }

        return enhancedItem;
      })
    );

    // Armar el detalle de los ítems en HTML
    let itemsHtml = "";
    if (enhancedItems && Array.isArray(enhancedItems)) {
      for (const item of enhancedItems) {
        // Agregar detalles específicos para reductores
        let additionalDetails = "";
        if (item.category === "reductores") {
          // Usar los detalles mejorados si están disponibles
          const ejeDetails = item.eje_salida_details
            ? `${item.eje_salida_details.tipo} (Código: ${item.eje_salida_details.codigo}, Tamaño: ${item.eje_salida_details.tamanio}, Precio: $${item.eje_salida_details.precio})`
            : item.eje_salida || "N/A";

          const fijacionDetails = item.fijacion_details
            ? `${item.fijacion_details.tipo} (Código: ${item.fijacion_details.codigo}, Tamaño: ${item.fijacion_details.tamanio}, Precio: $${item.fijacion_details.precio})`
            : item.fijacion || "N/A";

          const tipoEntradaDetails = item.tipo_entrada_details
            ? `${item.tipo_entrada_details.tipo}`
            : item.tipo_entrada || "N/A";

          additionalDetails = `
            <div style="padding: 10px; background-color: #f0f8ff; border-radius: 4px; margin-top: 10px;">
              <p><strong>Reducción:</strong> ${item.reduccion || "N/A"}</p>
              <p><strong>Fijación:</strong> ${fijacionDetails}</p>
              <p><strong>Eje de salida:</strong> ${ejeDetails}</p>
              <p><strong>Tipo de entrada:</strong> ${tipoEntradaDetails}</p>
            </div>
          `;
        }

        itemsHtml += `
          <tr>
            <td><strong>${item.name}</strong></td>
            <td>${item.category}</td>
            <td style="text-align: center;">${item.quantity}</td>
            <td style="text-align: right;">$${item.price}</td>
            <td>${item.codigo || "N/A"}</td>
          </tr>
          ${additionalDetails ? `<tr class="details-row"><td colspan="5">${additionalDetails}</td></tr>` : ""}
        `;
      }
    }

    const orderDate = new Date().toLocaleDateString("es-AR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const content = `
      <div style="text-align: center;">
        <h2 style="color: ${PRIMARY_COLOR}; margin-bottom: 5px;">¡Nueva Venta Realizada!</h2>
        <p style="font-size: 16px; margin-top: 0;">Pedido recibido el ${orderDate}</p>
      </div>
      
      <div style="background-color: #f8f9fa; border-radius: 8px; padding: 15px; margin: 20px 0;">
        <table style="border: none; width: 100%;">
          <tr>
            <td style="border: none; padding: 8px 0;"><strong>ID de Pago:</strong></td>
            <td style="border: none; padding: 8px 0;">${orderData.paymentId}</td>
          </tr>
          <tr>
            <td style="border: none; padding: 8px 0;"><strong>Cliente:</strong></td>
            <td style="border: none; padding: 8px 0;">${customerInfo.name}</td>
          </tr>
          <tr>
            <td style="border: none; padding: 8px 0;"><strong>Email:</strong></td>
            <td style="border: none; padding: 8px 0;"><a href="mailto:${customerInfo.email}">${customerInfo.email}</a></td>
          </tr>
          <tr>
            <td style="border: none; padding: 8px 0;"><strong>Total:</strong></td>
            <td style="border: none; padding: 8px 0; font-size: 18px; font-weight: bold; color: ${PRIMARY_COLOR};">$${orderData.finalPrice}</td>
          </tr>
        </table>
      </div>
      
      <h3 style="border-bottom: 2px solid ${PRIMARY_COLOR}; padding-bottom: 8px;">Detalles del Pedido</h3>
      
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Categoría</th>
            <th style="text-align: center;">Cant.</th>
            <th style="text-align: right;">Precio</th>
            <th>Código</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHtml}
        </tbody>
      </table>
      
      <div style="text-align: center; margin-top: 30px;">
        <a href="${process.env.FRONTEND_URL}/admin/orders" class="button">Ver en el Panel de Administración</a>
      </div>
    `;

    const html = baseEmailTemplate(content, "¡Nueva Venta Realizada!");
    await sendMail(storeOwnerEmail, "¡Nueva Venta! - Detalles del Pedido", html);
    console.log("Notificación de nueva venta enviada al dueño de la tienda");
    return true;
  } catch (error) {
    console.error("Error enviando notificación de nueva venta:", error);
    return false;
  }
};
