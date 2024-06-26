import React from "react";
import Card from "./Card.js";

const CardList = ({ devs }) => {
  return (
    <section className="flex flex-wrap justify-center gap-6 my-5">
      {devs.map((dev, i) => {
        return (
          <Card
            key={i}
            id={devs[i].id}
            username={devs[i].username}
            email={devs[i].email}
          />
        );
      })}
    </section>
  );
};

export default CardList;
