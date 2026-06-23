"use client";

import { useEffect, useState } from "react";

export default function About() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <main
      style={{
        background: "#080808",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        textAlign: "center",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Persian quote */}
      <p style={{
        fontSize: "15px",
        color: "#3a3a3a",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontWeight: 300,
        letterSpacing: "0.06em",
        marginBottom: "10px",
        direction: "rtl",
        opacity: 0,
        animation: show ? "fadeUp 0.8s ease forwards" : "none",
        animationDelay: "0ms",
      }}>
        تو تصور کن، من با چوب می‌سازمش
      </p>

      {/* English tagline */}
      <h1 style={{
        fontSize: "clamp(20px, 4vw, 30px)",
        fontWeight: 300,
        letterSpacing: "0.08em",
        color: "#c9a84c",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        margin: "0 0 48px",
        maxWidth: "560px",
        opacity: 0,
        animation: show ? "fadeUp 0.8s ease forwards" : "none",
        animationDelay: "150ms",
      }}>
        "You imagine it, I craft it in wood"
      </h1>

      {/* Divider */}
      <div style={{
        width: "40px",
        height: "1px",
        background: "rgba(201,168,76,0.3)",
        marginBottom: "48px",
        opacity: 0,
        animation: show ? "fadeUp 0.8s ease forwards" : "none",
        animationDelay: "300ms",
      }} />

      {/* Subheading */}
      <p style={{
        fontSize: "11px",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "#444",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        marginBottom: "40px",
        opacity: 0,
        animation: show ? "fadeUp 0.8s ease forwards" : "none",
        animationDelay: "400ms",
      }}>
        Handcrafted Woodcarving Art from Iran
      </p>

      {/* Body */}
      <div style={{
        maxWidth: "560px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "28px",
        opacity: 0,
        animation: show ? "fadeUp 0.8s ease forwards" : "none",
        animationDelay: "500ms",
      }}>
        {[
          "At VAV Gallery, your story becomes the starting point. It might begin with a quiet conversation, a meaningful name, a line of poetry that touches your soul, or a single word that carries years of memories. Whatever it is, something deeply personal to you, we listen carefully, then bring it to life by hand-carving it into solid wood using centuries-old Persian calligraphy techniques and traditional tools passed down through decades of mastery.",
          "This is more than decoration. Persian calligraphy is one of the world's most elegant and emotional art forms, its flowing lines shaped by centuries of devotion. The curves you'll hold, display, and one day pass on to your children carry not just beauty, but your own voice, your heritage, your love, your journey.",
          "Every piece is entirely original, carved by hand, never printed or reproduced. Rooted in Iran and shared with the world, VAV turns your personal inspiration, whether it's a cherished Rumi verse, your family name, a prayer, or a completely custom design, into something timeless you can cherish forever.",
          "If it matters to you, we can make it real.",
        ].map((text, i) => (
          <p key={i} style={{
            fontSize: "15px",
            lineHeight: "2",
            color: "#888",
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 300,
            letterSpacing: "0.02em",
            textAlign: "left",
            margin: 0,
          }}>
            {text}
          </p>
        ))}
      </div>
    </main>
  );
}
