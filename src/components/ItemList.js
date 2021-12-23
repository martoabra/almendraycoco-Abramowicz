import React from "react";
import Item from "./Item";

function ItemList({ items, categoria }) {
  return categoria
    ? items.map((producto) => {
        return (
          producto.idCategoria == categoria && (
            <Item key={producto.id} item={producto} />
          )
        );
      })
    : items.map((producto) => {
        return <Item key={producto.id} item={producto} />;
      });
}

export default ItemList;
