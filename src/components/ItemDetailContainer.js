import React from "react";
import { useParams } from "react-router-dom";
import Item from "./ItemDetail";

function ItemDetailContainer({ items }) {
  const { id } = useParams();
  return items.map((producto) => {
    return producto.id == id && <Item key={producto.id} item={producto} />;
  });
}

export default ItemDetailContainer;
