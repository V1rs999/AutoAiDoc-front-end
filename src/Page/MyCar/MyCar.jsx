import "./MyCar.scss";
import { useEffect, useState } from "react";
import axios from "axios";
export default function MyCar() {
  const [carData, setCarData] = useState(null); // Замість пустого масиву, використовуйте null для початкового значення

  useEffect(() => {
    let url = `https://baza-gai.com.ua/vin/${localStorage.getItem("Vin")}`;
    let key = "a180e34aa27fce2c28f63748fecda05b";

    axios
      .get(url, {
        headers: { Accept: "application/json", "X-Api-Key": key },
      })
      .then((response) => {
        setCarData(response.data);
      })
      .catch((error) => {
        console.error("Помилка отримання даних автомобіля:", error);
      });
  }, []);

  if (!carData) {
    return (
      <div className={"wait-for-res"}>
        <p>Спробуйте вручну ввести він код</p>
      </div>
    );
  }
  return (
    <div className={"myCar-wrapper"}>
      <div className={"myCar-content"}>
        <p className="myCar-descrition">
          <span className={"myCar-descrition-title"}>Держ номер: </span>
          {carData.digits}
        </p>
        <p className="myCar-descrition">
          <span className={"myCar-descrition-title"}>В розшуку: </span>
          {carData.is_stolen ? "Так" : "Ні"}
        </p>
        <p className="myCar-descrition">
          <span className={"myCar-descrition-title"}>Модель: </span>
          {carData.model}
        </p>
        <p className="myCar-descrition">
          <span className={"myCar-descrition-title"}>
            Кількість власників:{" "}
          </span>
          {carData.operations.length}
        </p>
        <p className="myCar-descrition">
          <span className={"myCar-descrition-title"}>Рік: </span>
          {carData.model_year}
        </p>
        <p className="myCar-descrition">
          <span className={"myCar-descrition-title"}>
            Останнє місце реєстрації:{" "}
          </span>
          {carData.operations[0].address}
        </p>
        <p className="myCar-descrition">
          <span className={"myCar-descrition-title"}>Колір: </span>
          {carData.operations[0].color.ua}
        </p>
        <p className="myCar-descrition">
          <span className={"myCar-descrition-title"}>Тип палива: </span>
          {carData.operations[0].fuel.ua}
        </p>
        <p className="myCar-descrition">
          <span className={"myCar-descrition-title"}>Власна вага: </span>
          {carData.operations[0].own_weight}
        </p>
        <p className="myCar-descrition">
          <span className={"myCar-descrition-title"}>Повна вага: </span>
          {carData.operations[0].total_weight}
        </p>
        <p className="myCar-descrition">
          <span className={"myCar-descrition-title"}>Дата реєстрації: </span>
          {carData.operations[0].registered_at}
        </p>
        <p className="myCar-descrition">
          <span className={"myCar-descrition-title"}>Компація виробник: </span>
          {carData.operations[0].vendor}
        </p>
        <p className="myCar-descrition">
          <span className={"myCar-descrition-title"}>Область: </span>
          {carData.region.name_ua}
        </p>
        <p className="myCar-descrition">
          <span className={"myCar-descrition-title"}>VIN код: </span>
          {carData.vin}
        </p>
      </div>
      <div className={"myCar-content-image"}>
        <img className="myCar-image" src={carData.photo_url} />
      </div>
    </div>
  );
}
