import "./Profile.scss";
import ImgProfile from "../../../../../public/Ellipse 4.png";
import { useEffect, useState } from "react";
import ProfileModal from "../../../../Component/Modal/ProfileModal/ProfileModal.jsx";
export default function Profile() {
  const [modalState, setModalState] = useState(false);
  const [profileImg, setProfileImg] = useState("");
  useEffect(() => {
    const { imageUrl } = JSON.parse(localStorage.getItem("User Param")) || {};
    setProfileImg(imageUrl);
  }, [profileImg]);

  return (
    <div className="profile" onClick={() => setModalState(true)}>
      <img
        className="ImgProfile"
        src={`${profileImg !== undefined ? profileImg : ImgProfile}`}
        alt="alt"
      />
      <div className="circle"></div>
      {modalState && (
        <ProfileModal
          onDestroy={(event) => {
            event.stopPropagation();
            setModalState(false);
          }}
        />
      )}
    </div>
  );
}
