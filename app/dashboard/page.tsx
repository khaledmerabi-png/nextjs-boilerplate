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
        <button
          onClick={() => {
            window.location.href =
              "https://nextjs-boilerplate-git-main-khaledmerabi-5263s-projects.vercel.app/create-assessment";
          }}
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

        <button
          onClick={() => {
            alert("My Assessments page is not built yet.");
          }}
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
      </div>

      <div style={{ marginTop: "30px" }}>
        <button
          onClick={() => {
            window.location.href =
              "https://nextjs-boilerplate-git-main-khaledmerabi-5263s-projects.vercel.app/create-assessment";
          }}
          style={{
            background: "transparent",
            border: "none",
            padding: 0,
            color: "#2563eb",
            textDecoration: "underline",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Open Create Assessment
        </button>
      </div>
    </main>
  );
}
