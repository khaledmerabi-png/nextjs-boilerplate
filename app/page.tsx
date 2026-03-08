
import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        background: "#f8fafc",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "12px" }}>
        Assessment Analyzer
      </h1>
      <p style={{ fontSize: "18px", color: "#475569", marginBottom: "24px" }}>
        Teacher Assessment Analysis Platform
      </p>

      <Link
        href="/login"
        style={{
          padding: "12px 24px",
          background: "#2563eb",
          color: "white",
          textDecoration: "none",
          borderRadius: "10px",
          fontWeight: "bold",
        }}
      >
        Login
      </Link>
    </main>
  );
}
