export default function CreateAssessment() {
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
        Create Assessment
      </h1>

      <p style={{ marginBottom: "30px", color: "#475569" }}>
        Set up a new assessment for analysis.
      </p>

      <div
        style={{
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <input
          placeholder="Assessment Name"
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <input
          placeholder="Subject"
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <input
          placeholder="Number of Classes"
          type="number"
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <button
          style={{
            padding: "12px",
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
      </div>
    </main>
  );
}
