import transporter from '../config/mailer.js';

export const sendMail = async (to, subject, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"Empresa" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });
    console.log(`📧 Email enviado a ${to}: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error('❌ Error enviando email:', error);
    throw new Error('Error enviando email');
  }
};
