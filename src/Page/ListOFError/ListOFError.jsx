import "./ListOFError.scss";
import ErrorRender from "./components/ErrorRender/ErrorRender.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

function ListOFError() {
  const [list, setList] = useState([]);
  const [numOfError, setnumOfError] = useState(0);
  const url = "https://localhost:7189/ListOFError";
  useEffect(() => {
    axios
      .get(url, {
        params: {
          Vin: localStorage.getItem("Vin"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setList(res.data.errors);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <section className="List">
      <div className="List-contents">
        <span className="codeOfError-titile">Код помилки</span>
        <span className="status-titile">Статус</span>
        <span className="numOfError">{numOfError}</span>
        <div className="hr" />
      </div>
      <ErrorRender output={list} setnumOfError={setnumOfError} />
    </section>
  );
}

export default ListOFError;
