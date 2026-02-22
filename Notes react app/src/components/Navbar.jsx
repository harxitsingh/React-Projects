import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      background: "#222",
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>

      <h2 style={{ color: "white", margin: 0 }}>Notes App</h2>

      <div style={{ display: "flex", gap: "20px" }}>

        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#ff4d4d" : "white",
            textDecoration: "none"
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/notes"
          style={({ isActive }) => ({
            color: isActive ? "#ff4d4d" : "white",
            textDecoration: "none"
          })}
        >
          Notes
        </NavLink>

        <NavLink
          to="/addnote"
          style={({ isActive }) => ({
            color: isActive ? "#ff4d4d" : "white",
            textDecoration: "none"
          })}
        >
          Add Note
        </NavLink>

        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "#ff4d4d" : "white",
            textDecoration: "none"
          })}
        >
          About
        </NavLink>

      </div>
    </nav>
  );
}

export default Navbar;