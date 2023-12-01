import "./Welcome.scss";
import Slider from "./component/Slider/Slider.jsx";
import ButtListOfError from "./component/ButtListOfError/ButtListOfError.jsx";
import ButtAiDiagnostics from "./component/AiDiagnostics/AiDiagnostics.jsx";
import Features from "./component/Features/Features.jsx";
import { Link } from "react-router-dom";
import React from "react";
function Welcome() {
  return (
    <div className="Main">
      <Slider />
      <div className="Buttons">
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
        <Link to="/authorization" className="create-acc-butt">
          <span className="create-acc">Open your free account today!</span>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
