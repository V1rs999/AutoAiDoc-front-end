import "./ProfileModal.scss";
import ImgProfile from "../../../../public/Ellipse 4.png";
import { Link } from "react-router-dom";
import axios from "axios";
import EditVin from "../../tools/EditVin/EditVin.jsx";
import { useEffect, useState } from "react";

export default function ProfileModal({ onDestroy }) {
  const [profileImg, setProfileImg] = useState("");
  useEffect(() => {
    const { imageUrl } = JSON.parse(localStorage.getItem("User Param")) || {};
    setProfileImg(imageUrl);
  }, [profileImg]);
  const closeWnd = (event) => {
    if (
      event.target.className === "modal-profile" ||
      event.target.className === "profile-a"
    ) {
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
          <img
            className="profile-img"
            src={`${profileImg !== undefined ? profileImg : ImgProfile}`}
            width={"50px"}
            alt="alt"
          />
          <span className="profile-name">{username}</span>
        </div>
        <div className="hr-profile"></div>
        <nav className="profile-modal-nav">
          <h2 className="profile-modal-item">
            <Link className="profile-a" to="/personalSet">
              Profile Setting
            </Link>
          </h2>
          <h2 className="profile-modal-item">
            <Link className="profile-a" to="/dropfile" onClick={closeWnd}>
              Drop File
            </Link>
          </h2>{" "}
          <h2 className="profile-modal-item">
            <Link className="profile-a" to="#" onClick={EditVin}>
              Edit Vin
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
