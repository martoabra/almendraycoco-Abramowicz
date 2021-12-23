import React from "react";
import "./NavBar.css";
import Carrito from "./CartWidget.js";
import { Link } from "react-router-dom";

function NavBar({ categorias }) {
  return (
    <nav className="NavBarItems">
      <h1 className="NavBarLogo">
        <Link to={"/"}> ALMENDRA Y COCO </Link>
      </h1>
      <ul className="NavBarListado">
        <li>Home</li>
        <li>Productos</li>
        <li>FAQ</li>
        <li>Contactanos</li>
        <Carrito></Carrito>
        </ul>
        <ul className="categorias">
            <li>Categorias:</li>
        {categorias &&
          categorias.map((categoria) => (
            <Link key={categoria.id} to={`/categoria/${categoria.id}`}>
              
                  <li>{categoria.nombre}</li>
                  
            </Link>
          ))}
        </ul>
      
    </nav>
  );
}

export default NavBar;