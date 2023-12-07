import "./ErrorRender.scss";
import squreButt from "../../../../../public/squre.svg";
import { useEffect } from "react";

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
            <span className="codeOfError">{Object.keys(item)}</span>
            <p className="descriptionOfError">{`Статус: ”${
              item[Object.keys(item)]
            }"`}</p>
            <div className="squreButt">
              <img src={squreButt} alt="squreButt" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
