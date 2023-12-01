import "./ProfileModal.scss";
import ImgProfile from "../../../../public/Ellipse 4.png";
import { Link } from "react-router-dom";
export default function ProfileModal({ onDestroy }) {
  const closeWnd = (event) => {
    if (event.target.className === "modal-profile") {
      onDestroy(event);
    }
  };

  return (
    <div onClick={closeWnd} className="modal-profile">
      <div className="modal-content-profile">
        <div className="profile">
          <img className="profile-img" src={ImgProfile} alt="alt" />
          <div className="profile-circle"></div>
          <span className="profile-name">Roman Draguca</span>
        </div>
        <div className="hr-profile"></div>
        <nav className="profile-modal-nav">
          <h2 className="profile-modal-item">
            <Link className="profile-a" to="#">
              Edit Vin
            </Link>
          </h2>
          <h2 className="profile-modal-item">
            <Link className="profile-a" to="/listoferror">
              List of error
            </Link>
          </h2>
          <h2 className="profile-modal-item">
            <Link className="profile-a" to="/authorization">
              Log out
            </Link>
          </h2>
        </nav>
      </div>
    </div>
  );
}
