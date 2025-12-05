import React from "react";

const Welcome = ({ user }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(to right, #ff9a9e, #fad0c4)", // soft romantic colors
        fontFamily: "'Cursive', sans-serif",
        textAlign: "center",
        padding: "20px",
        color: "#fff",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
        💖 Hi {user.name}, nice to see you again! 💖
      </h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
        📧 Your email: {user.email}
      </p>
      <p style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
        🔐 Your password (hashed): {user.password}
      </p>
      <p style={{ fontSize: "1.2rem", marginTop: "20px" }}>
        🌹 Wishing you a lovely day! 🌹
      </p>
    </div>
  );
};

export default Welcome;
