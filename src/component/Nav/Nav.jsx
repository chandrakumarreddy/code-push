import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar dark flex-center">
      <div>
        <Link className="navbar-brand" to="/">
          Employee Db
        </Link>
      </div>
      <div>
        <Link className="navbar-brand" to="/add">
          Add Employee
        </Link>
      </div>
    </nav>
  );
}
