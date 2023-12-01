import "./ErrorRender.scss";
import squreButt from "../../../../../public/squre.svg";
export default function ErrorRender({ output }) {
  return (
    <>
      {output.map((item, index) => (
        <div className="List-item" key={index}>
          <div className="Item-content">
            <span className="codeOfError">{Object.keys(item)}</span>{" "}
            <span className="descriptionOfError">{`Статус: ”${
              item[Object.keys(item)]
            }"`}</span>{" "}
            <div className="squreButt">
              <img src={squreButt} alt="squreButt" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
