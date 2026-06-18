"use client";

import Image from "next/image";

export default function ComingSoon() {
  return (
    <main
      style={{
        background: "#080808",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        textAlign: "center",
        gap: "0",
      }}
    >
      {/* Logo */}
      <div className="fade-up delay-1" style={{ marginBottom: "28px" }}>
        <Image
          src="/vav-logo.png"
          alt="VAV logo"
          width={160}
          height={160}
          style={{ display: "block" }}
          priority
        />
      </div>

      {/* Craftsman SVG animation */}
      <div className="fade-up delay-2" style={{ marginBottom: "36px" }}>
        <svg
          viewBox="0 0 320 200"
          width="320"
          height="200"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Craftsman carving wooden art"
        >
          {/* Desk surface */}
          <rect x="40" y="148" width="240" height="6" rx="2" fill="#2a2218" />
          <rect x="40" y="154" width="240" height="2" rx="1" fill="#1a150f" />

          {/* Desk legs */}
          <rect x="52" y="156" width="8" height="36" rx="2" fill="#1e1810" />
          <rect x="260" y="156" width="8" height="36" rx="2" fill="#1e1810" />

          {/* Lamp post */}
          <rect x="238" y="72" width="4" height="78" rx="2" fill="#333" />
          {/* Lamp head */}
          <ellipse cx="224" cy="72" rx="18" ry="7" fill="#2a2a2a" />
          {/* Lamp light cone */}
          <polygon points="210,74 238,74 228,140 200,140" fill="#c8a96e" opacity="0.07" />
          {/* Lamp glow */}
          <ellipse cx="219" cy="74" rx="12" ry="4" fill="#c8a96e" opacity="0.18"
            style={{ animation: "glow 2.5s ease-in-out infinite" }} />

          {/* Wood piece on desk — glowing warm */}
          <rect x="108" y="128" width="90" height="20" rx="4" fill="#6b4c2a" />
          <rect x="108" y="128" width="90" height="5" rx="2" fill="#8a6235" opacity="0.6" />
          {/* Carved pattern lines on wood */}
          <line x1="120" y1="134" x2="120" y2="145" stroke="#4a3418" strokeWidth="1.5" />
          <line x1="130" y1="132" x2="130" y2="146" stroke="#4a3418" strokeWidth="1" />
          <path d="M138 133 Q145 138 138 145" fill="none" stroke="#4a3418" strokeWidth="1.2" />
          <path d="M148 132 Q160 140 148 147" fill="none" stroke="#3d2c14" strokeWidth="1.2" />
          <line x1="168" y1="133" x2="168" y2="145" stroke="#4a3418" strokeWidth="1" />
          <line x1="178" y1="134" x2="178" y2="144" stroke="#4a3418" strokeWidth="1.5" />

          {/* Craftsman body — breathing */}
          <g style={{ transformOrigin: "160px 148px", animation: "breathe 4s ease-in-out infinite" }}>
            {/* Torso */}
            <rect x="136" y="90" width="38" height="58" rx="6" fill="#1c1c1c" />
            {/* Collar */}
            <rect x="148" y="90" width="14" height="8" rx="3" fill="#252525" />

            {/* Left arm (static, resting on desk) */}
            <rect x="110" y="118" width="36" height="10" rx="5" fill="#1c1c1c" />
            {/* Left hand */}
            <ellipse cx="112" cy="123" rx="7" ry="5" fill="#c4956a" />

            {/* Right arm — swinging with chisel */}
            <g style={{
              transformOrigin: "174px 110px",
              animation: "chisel 1.1s ease-in-out infinite",
            }}>
              <rect x="162" y="106" width="32" height="9" rx="4" fill="#1c1c1c" />
              {/* Right hand */}
              <ellipse cx="192" cy="110" rx="6" ry="5" fill="#c4956a" />
              {/* Chisel */}
              <rect x="192" y="106" width="28" height="4" rx="1" fill="#888" />
              <polygon points="220,106 228,108 220,110" fill="#aaa" />
            </g>

            {/* Head */}
            <ellipse cx="155" cy="78" rx="16" ry="17" fill="#c4956a" />
            {/* Hair */}
            <ellipse cx="155" cy="64" rx="16" ry="9" fill="#1a1208" />
            {/* Ear */}
            <ellipse cx="139" cy="78" rx="4" ry="5" fill="#b5885e" />
          </g>

          {/* Chair */}
          <rect x="148" y="148" width="42" height="5" rx="2" fill="#222" />
          <rect x="152" y="153" width="6" height="20" rx="2" fill="#1a1a1a" />
          <rect x="180" y="153" width="6" height="20" rx="2" fill="#1a1a1a" />
          <rect x="148" y="148" width="42" height="2" rx="1" fill="#2a2a2a" />
          {/* Chair back */}
          <rect x="180" y="118" width="6" height="32" rx="2" fill="#1e1e1e" />
          <rect x="148" y="116" width="40" height="6" rx="3" fill="#222" />

          {/* Wood shavings flying off */}
          <g style={{ transformOrigin: "215px 128px" }}>
            <path d="M215 128 Q220 122 226 126" fill="none" stroke="#8a6235" strokeWidth="2"
              strokeLinecap="round"
              style={{ animation: "shaving1 1.1s ease-out infinite" }} />
            <path d="M212 126 Q216 118 223 120" fill="none" stroke="#6b4c2a" strokeWidth="1.5"
              strokeLinecap="round"
              style={{ animation: "shaving2 1.1s ease-out infinite 0.15s" }} />
            <path d="M218 130 Q225 124 230 128" fill="none" stroke="#9a7040" strokeWidth="1.5"
              strokeLinecap="round"
              style={{ animation: "shaving3 1.1s ease-out infinite 0.3s" }} />
          </g>

          {/* Subtle desk tools */}
          {/* Small mallet on desk */}
          <rect x="68" y="138" width="18" height="7" rx="2" fill="#5a3e20" />
          <rect x="74" y="133" width="6" height="8" rx="1" fill="#3a2810" />
          {/* Pencil */}
          <rect x="260" y="136" width="3" height="16" rx="1" fill="#e8c96a" />
          <polygon points="260,152 263,152 261.5,158" fill="#c4956a" />
        </svg>
      </div>

      {/* Status badge */}
      <div className="fade-up delay-3" style={{ marginBottom: "20px" }}>
        <span className="tag">
          <span className="pulse-dot" />
          Website under construction
        </span>
      </div>

      {/* Artist name */}
      <div className="fade-up delay-3" style={{ marginBottom: "8px" }}>
        <p
          style={{
            fontSize: "22px",
            fontWeight: 300,
            letterSpacing: "0.12em",
            color: "#c9a84c",
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          }}
        >
          Morteza Saghi Shab
        </p>
      </div>

      {/* Title */}
      <div className="fade-up delay-4">
        <p
          style={{
            fontSize: "12px",
            fontWeight: 300,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#8a6420",
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          }}
        >
          Wood Carving Artist
        </p>
      </div>
    </main>
  );
}
