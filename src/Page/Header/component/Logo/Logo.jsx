import { Link } from "react-router-dom";
import "./Logo.scss";
export default function Logo() {
  return (
    <Link to="/" className="body-logo">
      <h1 className="logo">Auto AI doc</h1>
    </Link>
  );
}
