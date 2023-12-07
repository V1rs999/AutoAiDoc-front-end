import "./ProfileModal.scss";
import ImgProfile from "../../../../public/Ellipse 4.png";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ProfileModal({ onDestroy }) {
  const closeWnd = (event) => {
    if (event.target.className === "modal-profile") {
      onDestroy(event);
    }
  };

  const LogOut = () => {
    const url = "https://localhost:7189/Logout/Index";
    axios.post(url).then((res) => alert(`${res.data}`));
    localStorage.clear();
  };
  // const stored = localStorage.getItem("res data");
  // const storedData = stored ? JSON.parse(stored) : {};
  // const storedUsername = storedData.user || {};
  // const username = Object.values(storedUsername).toString() || "";
  // const storedToken = storedData.token || {};
  // function decodeJwt(token) {
  //   const base64Url = token.split(".")[1];
  //   const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  //   const rawData = atob(base64);
  //   return JSON.parse(rawData);
  // }
  //
  // const decodedToken = decodeJwt(storedToken);
  // console.log(decodedToken);

  return (
    <div onClick={closeWnd} className="modal-profile">
      <div className="modal-content-profile">
        <div className="profile">
          <img className="profile-img" src={ImgProfile} alt="alt" />
          <div className="profile-circle"></div>
          {/*<span className="profile-name">{username}</span>*/}
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
            <Link className="profile-a" to="/authorization" onClick={LogOut}>
              Log out
            </Link>
          </h2>
        </nav>
      </div>
    </div>
  );
}
