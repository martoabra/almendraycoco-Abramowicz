import React from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ items }) => {
  const { id } = useParams();
  return <ItemList items={items} categoria={id} />;
};

export default ItemListContainer;
