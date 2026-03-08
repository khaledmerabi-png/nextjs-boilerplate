export default function LoginPage() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f5f5f5",
      fontFamily: "Arial"
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "12px",
        width: "320px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
      }}>
        <h2>Teacher Login</h2>

        <input
          placeholder="Email"
          style={{width:"100%",padding:"10px",marginTop:"10px"}}
        />

        <input
          type="password"
          placeholder="Password"
          style={{width:"100%",padding:"10px",marginTop:"10px"}}
        />

        <button
          style={{
            width:"100%",
            padding:"10px",
            marginTop:"20px",
            background:"#2563eb",
            color:"white",
            border:"none",
            borderRadius:"6px"
          }}
        >
          Login
        </button>
      </div>
    </main>
  );
}
