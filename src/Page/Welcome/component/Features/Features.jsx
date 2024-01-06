import "./Features.scss";
import SuggestionImg from "../../../../../public/artificial-lighting-employee-blue-colored-uniform-works-automobile-salon 2.png";
import SuggestionSvg from "../../../../../public/Check2Circle.svg";
import SecurityImg from "../../../../../public/Rectangle 19.png";
import SecuritySvg from "../../../../../public/TrendingUp.svg";
import HistoryImg from "../../../../../public/Rectangle 20.png";
import HistorySvg from "../../../../../public/Vector (1).svg";

export default function Features() {
  return (
    <section className="Features">
      <div className="Suggestion">
        <img src={SuggestionImg} className="Suggestion-image" alt="" />

        <div className="Suggestion-wrapper">
          <h2 className="Suggestion-tittle">
            {<img src={SuggestionSvg} className="Suggestion-icon" alt="" />}
            Suggestion for repairing your vehicle
          </h2>
          <p className="Suggestion-decription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
            sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
            debitis ducimus.
          </p>
        </div>
      </div>
      <div className="Security">
        <img src={SecurityImg} className="Security-image" alt="" />

        <div className="Security-wrapper">
          <h2 className="Security-tittle">
            {<img src={SecuritySvg} className="Security-icon" alt="" />}
            Increased security
          </h2>
          <p className="Security-decription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
            sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
            debitis ducimus.
          </p>
        </div>
      </div>
      <div className="History">
        <img src={HistoryImg} className="History-image" alt="" />

        <div className="History-wrapper">
          <i className="History-icon"></i>
          <h2 className="History-tittle">
            {<img src={HistorySvg} className="History-icon" alt="" />}
            Increased security
          </h2>
          <p className="History-decription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
            sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
            debitis ducimus.
          </p>
        </div>
      </div>
    </section>
  );
}
