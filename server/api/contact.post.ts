import { Resend } from "resend";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  console.log("Resend API key exists:", !!config.resendApiKey);

  if (!config.resendApiKey) {
    throw createError({
      statusCode: 500,
      message: "Resend API key not configured",
    });
  }

  const resend = new Resend(config.resendApiKey);

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "rudy@moretaste.nl", // ← Change this to YOUR email
      subject: "New Contact Form Submission",
      html: `
        <h2>New message from ${body.name}</h2>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `,
    });

    console.log("Email sent:", data);
    return { success: true };
  } catch (error) {
    console.error("Resend error:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to send email",
    });
  }
});
