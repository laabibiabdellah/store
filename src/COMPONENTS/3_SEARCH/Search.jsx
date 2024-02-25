import { useState } from "react";
import Api from "../API/Api";
import Card from "../CARD/Card";
import "boxicons";
import Loading from "../LOADING/Loading";

export default function Search() {
  const [data] = Api();
  const [prod, setProd] = useState("");
  let prodValue = (e) => {
    setProd(e.target.value);
  };

  let card = data.filter((item) => {
    return prod.toLowerCase() === ""
      ? item
      : item.title.toLowerCase().includes(prod);
  });

  return (
    <div className="container mx-auto d-flex flex-column justify-content-center align-content-center">
      <div className="input-group search">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          onChange={prodValue}
        />
      </div>
      {data.length ? (
        <div className="w-100 d-flex justify-content-center align-content-center pb-5 gap-5 flex-wrap">
          {card.map((item) => {
            const { id, image, title, description } = item;
            return (
              <Card
                key={id}
                id={id}
                img={image}
                title={title}
                text={description}
              />
            );
          })}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
