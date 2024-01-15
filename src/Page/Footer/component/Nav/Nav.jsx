import { Link } from "react-router-dom";
import "./Nav.scss";

export default function Nav() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="footer-nav" role={"Nav"}>
      <Link className="footer-link" to="/dropfile" onClick={scrollToTop}>
        <span className="footer-nav-item">Drop File</span>
      </Link>
      <Link className="footer-link" to="/mycar" onClick={scrollToTop}>
        <span className="footer-nav-item">My Car</span>
      </Link>
      <Link className="footer-link" to="/personalSet" onClick={scrollToTop}>
        <span className="footer-nav-item">Personal Setting</span>
      </Link>
      <Link className="footer-link" to="/listoferror" onClick={scrollToTop}>
        <span className="footer-nav-item">List OF Error</span>
      </Link>
    </nav>
  );
}
