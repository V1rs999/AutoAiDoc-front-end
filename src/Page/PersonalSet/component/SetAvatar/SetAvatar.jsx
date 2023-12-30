import ImgProfile from "../../../../../public/Ellipse 4.png";
import "./SetAvatar.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SetAvatar() {
  const { imageUrl } = JSON.parse(localStorage.getItem("User Param")) || {};
  const [profileImg, setProfileImg] = useState(imageUrl || ImgProfile);
  const { userId } = JSON.parse(localStorage.getItem("User Param")) || {};
  const { userName: username } =
    JSON.parse(localStorage.getItem("User Param")) || {};

  function handleFileChange(e) {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("Id", userId);
    formData.append("Image", file);

    axios
      .post("https://localhost:7189/Account/ChangeImage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Файл успішно відправлено на сервер");
        console.log(response.data);
        const newUserName = response.data.username || username;
        const newImageUrl = URL.createObjectURL(file);
        setProfileImg(newImageUrl); // Оновлення зображення відображенням відвантаженого зображення
        const userParam = JSON.parse(localStorage.getItem("User Param")) || {};
        userParam.imageUrl = newImageUrl; // Оновлення URL зображення в об'єкті користувача
        userParam.userName = newUserName; // Update username
        localStorage.setItem("User Param", JSON.stringify(userParam)); // Оновлення localStorage з новим URL зображення
        window.location.reload();
      })

      .catch((error) => {
        alert(`Error making POST request: ${error.response.data}`);
      });
  }

  return (
    <>
      <div className="Avatar-wrapper">
        <div className={"Avatar-content"}>
          <img src={profileImg} className={"ImgProfile"} alt="imgProfile" />
          <h1 className={"nickname"}>{username}</h1>
        </div>
        <div className={"butt-div-change"}>
          <label htmlFor="fileInput" className={"changeImg"}>
            Upload photo
          </label>
          <input
            id="fileInput"
            style={{ display: "none" }}
            type={"file"}
            onChange={(e) => handleFileChange(e)}
          />
        </div>
      </div>
    </>
  );
}
