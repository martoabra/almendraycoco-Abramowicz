import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <Link to={`/item/${item.id}`}>
      <div className="ItemContainer">
        <div>{item.title}</div>
        <div>{item.price}</div>
        <div>{item.pictureUrl}</div>
      </div>
    </Link>
  );
}

export default Item;
