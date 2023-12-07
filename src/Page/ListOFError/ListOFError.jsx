import "./ListOFError.scss";
import output from "../../data/output.json";
import ErrorRender from "./components/ErrorRender/ErrorRender.jsx";
import { useState } from "react";

function ListOFError() {
  const [numOfError, setnumOfError] = useState(0);
  return (
    <section className="List">
      <div className="List-contents">
        <span className="codeOfError-titile">Код помилки</span>
        <span className="status-titile">Статус</span>
        <span className="numOfError">{numOfError}</span>
        <div className="hr" />
      </div>
      <ErrorRender output={output} setnumOfError={setnumOfError} />
    </section>
  );
}

export default ListOFError;
