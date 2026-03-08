export default function Dashboard() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        background: "#f8fafc",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Teacher Dashboard
      </h1>

      <p style={{ marginBottom: "30px", color: "#475569" }}>
        Manage your assessments and view analysis.
      </p>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <a
          href="/create-assessment"
          style={{
            padding: "20px",
            width: "200px",
            background: "#2563eb",
            color: "white",
            borderRadius: "10px",
            fontSize: "16px",
            cursor: "pointer",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Create Assessment
        </a>

        <a
          href="#"
          style={{
            padding: "20px",
            width: "200px",
            background: "#64748b",
            color: "white",
            borderRadius: "10px",
            fontSize: "16px",
            cursor: "pointer",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          My Assessments
        </a>
      </div>
    </main>
  );
}
