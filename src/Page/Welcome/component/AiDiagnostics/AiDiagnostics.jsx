import "./AiDiagnostics.scss";
import { Link } from "react-router-dom";
import backgeoundButt from "../../../../../public/modern-automobile-mechanic-composition 1.png";
export default function AiDiagnostics() {
  return (
    <div className="AiDiagnostics-div">
      <Link className="AiDiagnostics-a" to="/listoferror">
        <span className="AiDiagnostics-span">AiDiagnostics</span>
        <img src={backgeoundButt} className="AiDiagnostics-img" alt="" />
      </Link>
    </div>
  );
}
