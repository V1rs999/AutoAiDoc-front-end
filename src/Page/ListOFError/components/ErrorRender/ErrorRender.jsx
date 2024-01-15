import "./ErrorRender.scss";
import squreButt from "../../../../../public/squre.svg";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function ErrorRender({ output, setnumOfError }) {
  ErrorRender.propTypes = {
    output: PropTypes.func.isRequired,
    setnumOfError: PropTypes.func.isRequired,
  };
  const arr = ["P", "B", "C", "U"];

  const sortedOutput = [...output];

  sortedOutput.sort((a, b) => {
    const keyA = Object.keys(a)[0];
    const keyB = Object.keys(b)[0];
    return arr.indexOf(keyA[0]) - arr.indexOf(keyB[0]);
  });

  useEffect(() => {
    setnumOfError(sortedOutput.length);
  });

  return (
    <div data-testid="error-render">
      {sortedOutput.map((item, index) => (
        <div
          className="List-item"
          key={index}
          data-testid={`error-item-${index}`}
        >
          <div className="Item-content">
            <span className="codeOfError">{item.code}</span>
            <p className="descriptionOfError">{`Статус: ”${item.description}"`}</p>
            <Link
              to={`/ChatGPT?description=${encodeURIComponent(
                item.description
              )}&code=${encodeURIComponent(item.code)}`}
              className="squreButt"
            >
              <img src={squreButt} alt="squreButt" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
