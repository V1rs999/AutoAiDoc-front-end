import "./ButtListOfError.scss";
import { Link } from "react-router-dom";
import Car from "../../../../../public/Group.png";
export default function ButtListOfError() {
  return (
    <div className="ButtListOfError-div">
      <Link className="ButtListOfError-a" to="/listoferror">
        <span className="ButtListOfError-span">List OF Error</span>
        <img src={Car} className="ButtListOfError-img" alt="" />
      </Link>
    </div>
  );
}
