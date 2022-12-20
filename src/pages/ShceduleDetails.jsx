import React from "react";
import { useParams } from "react-router-dom";

const ShceduleDetails = () => {
  const { item } = useParams();
  const data = JSON.parse(item);

  return (
    <div>
      <div>
        <h3>Time:{data.time}</h3>
        <p>Name:{data.name}</p>
        <p>Destence:{data.distance}</p>
      </div>
    </div>
  );
};

export default ShceduleDetails;
