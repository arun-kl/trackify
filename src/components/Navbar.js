import React from "react";

function Navbar() {

  return (

    <nav className="navbar">

      <h2 className="logo">Trackify</h2>

      <ul className="nav-links">
        <li>Home</li>
        <li>Tasks</li>
        <li>Dashboard</li>
      </ul>

    </nav>
  );
}

export default Navbar;