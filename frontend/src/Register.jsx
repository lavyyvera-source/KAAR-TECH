import React, { useState } from "react";
import axios from "axios";

const Register = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Password validation
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
  if (!passwordRegex.test(password)) {
    alert(
      "❌ Password must be at least 6 characters and include:\n- 1 uppercase letter\n- 1 lowercase letter\n- 1 number\n- 1 special character (!@#$%^&*)"
    );
    return;
  }

  try {
    const response = await axios.post("http://localhost:5000/register", {
      name,
      email,
      password,
    });
    onRegister(response.data.user);
  } catch (err) {
    console.error(err);
    if (err.response && err.response.data && err.response.data.message) {
      alert(`❌ Error: ${err.response.data.message}`);
    } else {
      alert("❌ Error registering user. Try again!");
    }
  }
};

  

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(to right, #fbc2eb, #a6c1ee)",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
        🎉 Welcome Dear! 🎉
      </h1>
      <p style={{ marginBottom: "30px", fontSize: "1.5rem" }}>
        Please register to continue 😊
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "400px", // form width
          gap: "15px",
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0px 5px 30px rgba(0,0,0,0.2)",
        }}
      >
        <input
          type="text"
          placeholder="📝 Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "1rem",
            width: "100%",
          }}
        />
        <input
          type="email"
          placeholder="📧 Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "1rem",
            width: "100%",
          }}
        />
        <input
          type="password"
          placeholder="🔒 Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "1rem",
            width: "100%",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            background: "#6a11cb",
            color: "white",
            fontSize: "1.2rem",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.background = "#2575fc")}
          onMouseOut={(e) => (e.target.style.background = "#6a11cb")}
        >
          Register 🚀
        </button>
      </form>
    </div>
  );
};

export default Register;
