import * as brevo from "@getbrevo/brevo";
import { getBrevoClient, getSenderEmail } from "./client";

export interface SendEmailOptions {
  to: { email: string; name?: string }[];
  subject: string;
  htmlContent?: string;
  textContent?: string;
}

export const sendEmail = async (options: SendEmailOptions) => {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.warn("Emails are disabled because BREVO_API_KEY is missing. Would have sent:", options);
    return;
  }

  const client = getBrevoClient();
  const sendSmtpEmail = new brevo.SendSmtpEmail();

  sendSmtpEmail.subject = options.subject;
  sendSmtpEmail.htmlContent = options.htmlContent;
  sendSmtpEmail.textContent = options.textContent;
  sendSmtpEmail.sender = { email: getSenderEmail(), name: "AI Document Assistant" };
  sendSmtpEmail.to = options.to;

  try {
    const data = await client.sendTransacEmail(sendSmtpEmail);
    console.log("Email sent successfully:", data);
    return data;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
};
