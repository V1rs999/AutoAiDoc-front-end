import "./VWLine.scss";
import VWIcon from "../../../../../public/551 1.png";
export default function VWLine({ scrolled }) {
  return (
    <div className="VWLine">
      <div className={`VWLine-content sticky ${scrolled ? "scrolled" : ""}`}>
        <div className="hr VW" style={{ width: "550px ", height: "1px" }} />
        <img className="VWIcon" src={VWIcon} alt="" />
        <div className="hr" style={{ width: "100%", height: "1px" }} />
      </div>
    </div>
  );
}
