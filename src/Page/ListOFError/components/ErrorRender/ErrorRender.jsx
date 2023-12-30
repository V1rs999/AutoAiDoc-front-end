import "./ErrorRender.scss";
import squreButt from "../../../../../public/squre.svg";
import { useEffect } from "react";
import ChatGPT from "../../../../Api/ChatGPT.jsx";
import { Link } from "react-router-dom";
import chatGPT from "../../../../Api/ChatGPT.jsx";

export default function ErrorRender({ output, setnumOfError }) {
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
    <>
      {sortedOutput.map((item, index) => (
        <div className="List-item" key={index}>
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
    </>
  );
}
