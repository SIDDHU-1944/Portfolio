import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL,
    pass: process.env.GOOGLE_APP_PASS,
  },
});

const mailto = async ({ name, gmail, msg }) => {
  try {
    const info = await transporter.sendMail({
      from: `${name} <${gmail}>`,
      to: process.env.GMAIL,
      subject: `${name} sent a connect mail`,
      text: msg, // plain‑text body
      html: `<b>${msg}</b>`, // HTML body
    });

    console.log("Message sent:", info.messageId);
    return "message sent"
  } catch (error) {
    console.log("mailtoerror",error);
    throw error;
  }
};

export { mailto };
