import React, { useEffect, useState } from "react";
import "./Header.scss";
import Logo from "./component/Logo/Logo.jsx";
import Nav from "./component/Nav/Nav.jsx";
import Search from "./component/Search/Search.jsx";
import Profile from "./component/Profile/Profile.jsx";
import VWLine from "./component/VWLine/VWLine.jsx";
import { useLocation } from "react-router-dom";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (
    useLocation().pathname === "/authorization" ||
    useLocation().pathname === "/registration"
  ) {
    return (
      <div className="Header">
        <Logo />
        <VWLine scrolled={scrolled} />
      </div>
    );
  }
  return (
    <div className="Header">
      <div className={`header-content sticky ${scrolled ? "scrolled" : ""}`}>
        <Logo />
        <Nav />
        <Search />
        <Profile />
      </div>
      <VWLine scrolled={scrolled} />
    </div>
  );
}

export default Header;
