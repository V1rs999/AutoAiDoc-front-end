import ImgProfile from "../../../../../public/Ellipse 4.png";
import "./SetAvatar.scss";
export default function SetAvatar() {
  const { userName: username } =
    JSON.parse(localStorage.getItem("User Param")) || {};
  const ChangerImg = function () {
    prompt("Enter url to your image", "");
  };
  return (
    <>
      <div className="Avatar-wrapper">
        <div className={"Avatar-content"}>
          <img src={ImgProfile} className={"ImgProfile"} alt="imgProfile" />
          <h1 className={"nickname"}>{username}</h1>
        </div>
        <div className={"butt-div-change"}>
          <button onClick={ChangerImg} className={"changeImg"}>
            Change photo
          </button>
        </div>
      </div>
    </>
  );
}
