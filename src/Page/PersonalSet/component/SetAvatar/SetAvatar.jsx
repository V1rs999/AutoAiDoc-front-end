import ImgProfile from "../../../../../public/Ellipse 4.png";
import "./SetAvatar.scss";
import { useEffect, useState } from "react";
export default function SetAvatar() {
  const [profileImg, setProfileImg] = useState("");
  useEffect(() => {
    const { imageUrl } = JSON.parse(localStorage.getItem("User Param")) || {};
    setProfileImg(imageUrl);
  }, [profileImg]);
  const { userName: username } =
    JSON.parse(localStorage.getItem("User Param")) || {};
  return (
    <>
      <div className="Avatar-wrapper">
        <div className={"Avatar-content"}>
          <img
            src={`${profileImg !== undefined ? profileImg : ImgProfile}`}
            className={"ImgProfile"}
            alt="imgProfile"
          />
          <h1 className={"nickname"}>{username}</h1>
        </div>
        <div className={"butt-div-change"}>
          <input
            type={"file"}
            className={"changeImg"}
            placeholder={"Change photo"}
          />
        </div>
      </div>
    </>
  );
}
