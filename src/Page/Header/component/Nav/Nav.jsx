import { Link } from "react-router-dom";
import "./Nav.scss";
export default function Nav() {
  return (
    <nav className="header-nav" role={"Nav"}>
      <Link className="header-link" to="/dropfile">
        <span className="header-nav-item">Drop File</span>
      </Link>
      <Link className="header-link" to="/mycar">
        <span className="header-nav-item">My Car</span>
      </Link>
      <Link className="header-link" to="/personalSet">
        <span className="header-nav-item">Personal Setting</span>
      </Link>
      <Link className="header-link" to="/listoferror">
        <span className="header-nav-item">List OF Error</span>
      </Link>
    </nav>
  );
}
