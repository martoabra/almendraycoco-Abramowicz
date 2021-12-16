import React from "react";
import Item from "./Item";

function ItemList({ items }) {
  return (
    items.map((producto) => {
    return <Item key={producto.id} item={producto} />;
  }));
}

export default ItemList;
