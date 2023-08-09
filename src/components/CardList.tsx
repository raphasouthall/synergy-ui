import React from "react";
import { Default as Card } from "./Card";
import "./CardList.css";

const CardList: React.FC = () => {
  const numberOfCards = 10; // Change this value to the number of cards you want to display

  return (
    <div className="card-list">
      {Array.from({ length: numberOfCards }).map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default CardList;
