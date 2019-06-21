import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <NavLink to="/">
        <div>Smurfs</div>
      </NavLink>
      <NavLink to="newsmurf">
        <div>Add Smurf</div>
      </NavLink>
    </nav>
  );
}
