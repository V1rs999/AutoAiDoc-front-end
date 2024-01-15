import "./Welcome.scss";
import Slider from "./component/Slider/Slider.jsx";
import ButtListOfError from "./component/ButtListOfError/ButtListOfError.jsx";
import ButtAiDiagnostics from "./component/AiDiagnostics/AiDiagnostics.jsx";
import Features from "./component/Features/Features.jsx";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
function Welcome() {
  const urlString = useLocation().search;

  useEffect(() => {
    const urlParams = new URLSearchParams(urlString);

    const tokenParam = urlParams.get("token");
    const userParam = urlParams.get("user");

    if (tokenParam !== null && tokenParam !== undefined) {
      localStorage.setItem("Token Param", tokenParam);
      localStorage.setItem("User Param", userParam);
    }
  }, [urlString]);

  return (
    <div className="Main" role={"root"}>
      <Slider />
      <div className="Buttons" role={"linksbutt"}>
        <ButtListOfError />
        <ButtAiDiagnostics />
      </div>
      <Features />
      <div className="wrapper">
        <div className="recomendation-join">
          <p className="join">
            The best day to join Auto Ai doc was one year ago. The second best
            is today!
          </p>
        </div>
        <Link to="/authorization" className="create-acc-butt" onClick={LogOut}>
          <span className="create-acc">Open your free account today!</span>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;

export const LogOut = async () => {
  const url = "https://localhost:7189/Logout";
  const response = await axios.post(url);
  localStorage.clear();
  return response;
};
