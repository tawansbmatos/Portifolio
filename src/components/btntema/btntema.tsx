import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Btntema() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <button
      style={{
        border: "none",
        borderRadius: "50%",
        width: "45px",
        height: "45px",
        backgroundColor: "transparent",
      }}
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <FaSun style={{ color: "gold", width: "24px", height: "24px", cursor: "pointer" }} />
      ) : (
        <FaMoon style={{ color: "#222", width: "20px", height: "20px", cursor: "pointer" }} />
      )}
    </button>
  );
}
