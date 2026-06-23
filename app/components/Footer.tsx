export default function Footer() {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "16px 24px",
        textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        background: "rgba(8,8,8,0.85)",
        backdropFilter: "blur(12px)",
      }}
    >
      <p style={{
        fontSize: "10px",
        letterSpacing: "0.12em",
        color: "#2e2e2e",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        margin: 0,
      }}>
        © {new Date().getFullYear()} VAV Gallery. All rights reserved.
      </p>
    </footer>
  );
}
