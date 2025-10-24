import React from "react";

export default function ThemeToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      className="btn btn-outline-secondary btn-sm"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
