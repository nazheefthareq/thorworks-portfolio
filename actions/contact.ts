"use server";

import { Resend } from "resend";

// Inisialisasi Resend menggunakan API key dari environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactMessage(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Validasi dasar
  if (!name || !email || !message) {
    return { error: "Please fill out all fields." };
  }

  try {
    const { error } = await resend.emails.send({
      from: "ThorWorks Portfolio <onboarding@resend.dev>", 
      
      // GANTI email di bawah ini dengan email asli Anda (tempat Anda ingin menerima pesan)
      to: "nazheefthareq15@gmail.com", 
      
      subject: `New Freelance Inquiry from ${name}`,
      replyTo: email, // Agar Anda bisa langsung menekan "Balas" ke email klien
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return { error: "Failed to send message. Please try again later." };
    }

    return { success: "Your message has been sent successfully. I'll get back to you soon." };
  } catch (error) {
    console.error("Server Action Error:", error);
    return { error: "An unexpected error occurred." };
  }
}