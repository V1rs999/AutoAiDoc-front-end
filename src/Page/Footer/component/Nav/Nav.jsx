import { Link } from "react-router-dom";
import React from "react";
import "./Nav.scss";

export default function Nav() {
  return (
    <nav className="footer-nav">
      <Link className="footer-link" to="/dropfile">
        <span className="footer-nav-item">Drop File</span>
      </Link>
      <Link className="footer-link" to="/mycar">
        <span className="footer-nav-item">My Car</span>
      </Link>
      <Link className="footer-link" to="/personalSet">
        <span className="footer-nav-item">Personal Setting</span>
      </Link>
      <Link className="footer-link" to="/listoferror">
        <span className="footer-nav-item">List OF Error</span>
      </Link>
    </nav>
  );
}
