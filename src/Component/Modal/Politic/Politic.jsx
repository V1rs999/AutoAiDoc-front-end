import "./Politic.scss";
import { Link } from "react-router-dom";

export default function Politic({ onDestroy }) {
  const closeWnd = (event) => {
    if (event.target.className === "politic-modal") {
      onDestroy(event);
    }
  };
  return (
    <div onClick={closeWnd} className="politic-modal">
      <div className="politic-modal-content">
        <i className="politic-modal-content-close" onClick={onDestroy}>
          X
        </i>
        <aside className="profile-content-aside">
          <section className="aside-section">
            <Link className="aside-link" to="#">
              Terms of Use
            </Link>
            <Link className="aside-link" to="#">
              Privacy Policy
            </Link>
          </section>
        </aside>
        <section className="profile-content-main">
          <h2 className="main-title">Terms of Use</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, alias
            aperiam atque aut deleniti deserunt, dignissimos dolores eligendi
            esse illo ipsam natus numquam odit quae quasi ut voluptate! A,
            dignissimos.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, alias
            aperiam atque aut deleniti deserunt, dignissimos dolores eligendi
            esse illo ipsam natus numquam odit quae quasi ut voluptate! A,
            dignissimos.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, alias
            aperiam atque aut deleniti deserunt, dignissimos dolores eligendi
            esse illo ipsam natus numquam odit quae quasi ut voluptate! A,
            dignissimos.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, alias
            aperiam atque aut deleniti deserunt, dignissimos dolores eligendi
            esse illo ipsam natus numquam odit quae quasi ut voluptate! A,
            dignissimos.
          </p>
        </section>
      </div>
    </div>
  );
}
