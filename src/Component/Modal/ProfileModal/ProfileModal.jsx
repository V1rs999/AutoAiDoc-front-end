import "./ProfileModal.scss";
import ImgProfile from "../../../../public/Ellipse 4.png";
import { Link } from "react-router-dom";
import EditVin from "../../tools/EditVin/EditVin.jsx";
import axios from "axios";

export default function ProfileModal({ onDestroy }) {
  const closeWnd = (event) => {
    if (event.target.className === "modal-profile") {
      onDestroy(event);
    }
  };

  const LogOut = () => {
    const url = "https://localhost:7189/Logout";
    axios.post(url).then((res) => alert(`${res.data}`));
    localStorage.clear();
  };

  const { userName: username } =
    JSON.parse(localStorage.getItem("User Param")) || {};

  return (
    <div onClick={closeWnd} className="modal-profile">
      <div className="modal-content-profile">
        <div className="profile">
          <img className="profile-img" src={ImgProfile} alt="alt" />
          <div className="profile-circle"></div>
          <span className="profile-name">{username}</span>
        </div>
        <div className="hr-profile"></div>
        <nav className="profile-modal-nav">
          <h2 className="profile-modal-item">
            <Link className="profile-a" to="#">
              My car
            </Link>
          </h2>
          <h2 className="profile-modal-item">
            <Link className="profile-a" to="/listoferror">
              List of error
            </Link>
          </h2>
          <h2 className="profile-modal-item">
            <Link className="profile-a" to="/authorization" onClick={LogOut}>
              Log out
            </Link>
          </h2>
        </nav>
      </div>
    </div>
  );
}
