import * as brevo from "@getbrevo/brevo";

let apiInstance: brevo.TransactionalEmailsApi | null = null;

export const getBrevoClient = (): brevo.TransactionalEmailsApi => {
  if (!apiInstance) {
    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.warn("BREVO_API_KEY is missing. Emails will not be sent.");
    }
    
    apiInstance = new brevo.TransactionalEmailsApi();
    
    if (apiKey) {
      // @ts-ignore - The Brevo SDK uses an authenticator object that can be slightly tricky to type
      apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);
    }
  }
  return apiInstance;
};

export const getSenderEmail = (): string => {
  return process.env.BREVO_SENDER_EMAIL || "noreply@example.com";
};
