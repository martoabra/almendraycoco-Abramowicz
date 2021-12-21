import React from "react";
import Item from "./ItemDetail";

function ItemDetailContainer({ items }) {
  return (
    items.map((producto) => {
    return <Item key={producto.id} item={producto} />;
  }));
}

export default ItemDetailContainer;
