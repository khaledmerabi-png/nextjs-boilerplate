export default function ClassSetup() {
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
        Class Setup
      </h1>

      <p style={{ marginBottom: "30px", color: "#475569" }}>
        Enter the class names and number of students for this assessment.
      </p>

      <div
        style={{
          maxWidth: "700px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
          }}
        >
          <h2 style={{ marginBottom: "12px" }}>Class 1</h2>
          <input
            placeholder="Class 1 Name"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              marginBottom: "12px",
            }}
          />
          <input
            placeholder="Number of Students"
            type="number"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
          }}
        >
          <h2 style={{ marginBottom: "12px" }}>Class 2</h2>
          <input
            placeholder="Class 2 Name"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              marginBottom: "12px",
            }}
          />
          <input
            placeholder="Number of Students"
            type="number"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
          }}
        >
          <h2 style={{ marginBottom: "12px" }}>Class 3</h2>
          <input
            placeholder="Class 3 Name"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              marginBottom: "12px",
            }}
          />
          <input
            placeholder="Number of Students"
            type="number"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
        </div>

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
          Continue to Assessment Workspace
        </button>
      </div>
    </main>
  );
}
