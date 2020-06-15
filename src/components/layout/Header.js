import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>ToDoList</h1>
    </header>
  );
}

// ===== Header Style ===
const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

export default Header;
