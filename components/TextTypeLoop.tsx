"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TextTypeLoopProps {
  words: string[];
  className?: string;
}

export default function TextTypeLoop({ words, className = "" }: TextTypeLoopProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Secara otomatis mencari kata terpanjang di dalam array untuk menahan layout
  const longestWord = words.reduce((a, b) => a.length > b.length ? a : b, "");

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 60;
    const pauseTime = 2000;

    const currentWord = words[currentWordIndex % words.length];

    const handleTyping = () => {
      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
      } else {
        setCurrentText((prev) => currentWord.slice(0, prev.length + 1));
      }
    };

    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => prev + 1);
      timeout = setTimeout(handleTyping, 500); 
    } else {
      timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className={`inline-grid ${className}`}>
      
      {/* ELEMEN 1: Teks bayangan (invisible) */}
      <span className="invisible col-start-1 row-start-1 inline-flex items-center">
        {longestWord}
        <span className="inline-block w-[0.08em] h-[0.9em] ml-2" />
      </span>
      
      {/* ELEMEN 2: Teks animasi utama */}
      <span className="col-start-1 row-start-1 inline-flex items-center">
        {/* Implementasi Gradien Animasi Asli (Native) */}
        <span className="bg-gradient-to-r from-brand-accent via-cyan-400 to-brand-accent bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient">
          {currentText}
        </span>
        
        {/* Kursor berkedip (Diberi warna brand-accent agar tidak transparan) */}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          className="inline-block w-[0.08em] h-[0.9em] bg-brand-accent ml-2"
        />
      </span>
      
    </span>
  );
}