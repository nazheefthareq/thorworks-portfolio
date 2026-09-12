"use server";

// Server action untuk menangani form submission[cite: 9]
export async function sendContactMessage(prevState: any, formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return { error: "Please fill out all fields." };
  }

  try {
    // TODO: Integrasi dengan layanan email (seperti Resend, SendGrid, atau Nodemailer) akan diletakkan di sini.
    // Untuk saat ini, kita simulasikan jeda jaringan (network delay) selama 1.5 detik.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("New message from:", name, email, message);

    return { success: "Your message has been sent successfully. I'll get back to you soon." };
  } catch (error) {
    return { error: "Failed to send message. Please try again later." };
  }
}