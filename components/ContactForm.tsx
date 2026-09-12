"use client";

import { useActionState } from "react";
import { sendContactMessage } from "@/actions/actions";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactMessage, null);

  return (
    // 1. Jarak antar input diperkecil menjadi gap-8
    <form action={formAction} className="flex flex-col gap-8 w-full max-w-xl">
      
      {/* Name Input */}
      <div className="flex flex-col gap-2 relative group">
        <input 
          type="text" 
          name="name"
          id="name"
          required
          disabled={isPending}
          placeholder="Your Name"
          // 2. Padding menjadi py-3 dan ukuran font menjadi text-lg
          className="w-full bg-transparent border-b border-gray-700 py-3 text-lg text-brand-white focus:outline-none focus:border-brand-accent transition-colors disabled:opacity-50"
        />
      </div>

      {/* Email Input */}
      <div className="flex flex-col gap-2 relative group">
        <input 
          type="email" 
          name="email"
          id="email"
          required
          disabled={isPending}
          placeholder="Your Email"
          className="w-full bg-transparent border-b border-gray-700 py-3 text-lg text-brand-white focus:outline-none focus:border-brand-accent transition-colors disabled:opacity-50"
        />
      </div>

      {/* Message Textarea */}
      <div className="flex flex-col gap-2 relative group">
        <textarea 
          name="message"
          id="message"
          required
          rows={4}
          disabled={isPending}
          placeholder="Your Message"
          className="w-full bg-transparent border-b border-gray-700 py-3 text-lg text-brand-white focus:outline-none focus:border-brand-accent transition-colors resize-none disabled:opacity-50"
        />
      </div>

      {/* Submit Button & Feedback Status */}
      <div className="flex flex-col gap-4 mt-2">
        <motion.button 
          type="submit"
          disabled={isPending}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          // 3. Tombol sedikit dirampingkan menjadi px-10 py-3.5
          className="w-full md:w-auto self-start bg-brand-white text-brand-black px-10 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Sending..." : "Send Message"}
        </motion.button>

        {/* Notifikasi Sukses/Error dengan ukuran teks yang lebih proporsional */}
        {state?.success && <p className="text-brand-accent font-medium mt-1 text-sm">{state.success}</p>}
        {state?.error && <p className="text-red-500 font-medium mt-1 text-sm">{state.error}</p>}
      </div>

    </form>
  );
}