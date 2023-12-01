import "./Footer.scss";
import React from "react";
import Nav from "./component/Nav/Nav.jsx";
import Logo from "../Header/component/Logo/Logo.jsx";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-hr"></div>
      <div className="Footer-logo">
        <Logo />
      </div>
      <div className="Footer-nav">
        <Nav />
      </div>
    </div>
  );
}
