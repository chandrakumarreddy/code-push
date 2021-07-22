import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="custom-nav dark flex-center">
      <div>
        <Link className="navbar-brand white" to="/">
          Employee Db
        </Link>
      </div>
      <div>
        <Link className="navbar-brand white" to="/add">
          Add Employee
        </Link>
      </div>
    </nav>
  );
}
