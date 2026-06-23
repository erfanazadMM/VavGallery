"use client";

import { useEffect, useState } from "react";

export default function Contact() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 80);
    return () => clearTimeout(t);
  }, []);

  const letters = "VAV Gallery".split("");

  return (
    <main
      style={{
        background: "#080808",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 24px 40px",
        textAlign: "center",
        gap: "0",
      }}
    >
      <style>{`
        @keyframes letterIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* VAV Gallery — letter by letter fade in */}
      <div style={{ marginBottom: "56px" }}>
        <h1 style={{
          fontSize: "36px",
          fontWeight: 300,
          letterSpacing: "0.16em",
          color: "#c9a84c",
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          margin: "0 0 10px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}>
          {letters.map((char, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                opacity: 0,
                animation: show ? `letterIn 0.5s ease forwards` : "none",
                animationDelay: `${i * 60}ms`,
                whiteSpace: char === " " ? "pre" : "normal",
              }}
            >
              {char}
            </span>
          ))}
        </h1>
        <p style={{
          fontSize: "13px",
          letterSpacing: "0.1em",
          color: "#666",
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontWeight: 400,
          margin: 0,
          opacity: 0,
          animation: show ? "letterIn 0.6s ease forwards" : "none",
          animationDelay: "700ms",
        }}>
          Morteza Saghi Shab
        </p>
      </div>

      {/* Contact links */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        alignItems: "center",
      }}>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/vav.gallery/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            textDecoration: "none",
            padding: "16px 32px",
            width: "300px",
            background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "4px",
            backdropFilter: "blur(16px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
            transition: "border-color 0.25s, box-shadow 0.25s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
            e.currentTarget.style.boxShadow = "0 6px 28px rgba(0,0,0,0.4), 0 0 12px rgba(201,168,76,0.08), inset 0 1px 0 rgba(255,255,255,0.08)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)";
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.5" fill="#c9a84c"/>
          </svg>
          <span style={{ fontSize: "12px", letterSpacing: "0.1em", color: "#999", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 300 }}>
            @vav.gallery
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/989353702007"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            textDecoration: "none",
            padding: "16px 32px",
            width: "300px",
            background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "4px",
            backdropFilter: "blur(16px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
            transition: "border-color 0.25s, box-shadow 0.25s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
            e.currentTarget.style.boxShadow = "0 6px 28px rgba(0,0,0,0.4), 0 0 12px rgba(201,168,76,0.08), inset 0 1px 0 rgba(255,255,255,0.08)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)";
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
          <span style={{ fontSize: "12px", letterSpacing: "0.1em", color: "#999", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 300 }}>
            +98 935 370 2007
          </span>
        </a>

        {/* Email */}
        <a
          href="mailto:vav.gallery1@gmail.com"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            textDecoration: "none",
            padding: "16px 32px",
            width: "300px",
            background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "4px",
            backdropFilter: "blur(16px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
            transition: "border-color 0.25s, box-shadow 0.25s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
            e.currentTarget.style.boxShadow = "0 6px 28px rgba(0,0,0,0.4), 0 0 12px rgba(201,168,76,0.08), inset 0 1px 0 rgba(255,255,255,0.08)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)";
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <span style={{ fontSize: "12px", letterSpacing: "0.1em", color: "#999", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 300 }}>
            vav.gallery1@gmail.com
          </span>
        </a>

      </div>
    </main>
  );
}
