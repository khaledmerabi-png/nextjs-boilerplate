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
        <form action="/create-assessment" method="get">
          <button
            type="submit"
            style={{
              padding: "20px",
              width: "300px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Create Assessment
          </button>
        </form>

        <form action="/dashboard" method="get">
          <button
            type="submit"
            style={{
              padding: "20px",
              width: "300px",
              background: "#64748b",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            My Assessments
          </button>
        </form>
      </div>
    </main>
  );
}
