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
          maxWidth: "700px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <input
          placeholder="Assessment Name"
          style={{
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <select
          style={{
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
          defaultValue=""
        >
          <option value="" disabled>
            Select Programme
          </option>
          <option value="DP">DP</option>
          <option value="MYP">MYP</option>
        </select>

        <input
          placeholder="Subject Group"
          style={{
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <input
          placeholder="Subject"
          style={{
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <input
          placeholder="Rubric / Component"
          style={{
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <input
          placeholder="Number of Classes"
          type="number"
          style={{
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <button
          style={{
            padding: "14px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Continue
        </button>
      </div>
    </main>
  );
}
