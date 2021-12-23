import { React, useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Greeting from "./components/ItemListContainer";
import ItemList from "./components/ItemList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetail from "./components/ItemDetail";

const categorias = [
  { id: 1, nombre: "Queso", descripción: "articulos lácteos" },
  {
    id: 2,
    nombre: "Chocolate",
    descripción: "articulos que no son lacteos lácteos",
  },
];

const items = [
  {
    id: 1,
    title: "CheeseCake",
    price: "$ 100",
    pictureUrl: (
      <img
        src="https://martoabra.github.io/Proyectofinal-JS-Coder-Abramowicz/assets/1b.jpg"
        alt="CheeseCake"
        className="ImgProd"
      />
    ),
    descripcion: "Una rica torta de queso para toda la familia",
    idCategoria: 1,
  },
  {
    id: 2,
    title: "NY",
    price: "$ 200",
    pictureUrl: (
      <img
        src="https://martoabra.github.io/Proyectofinal-JS-Coder-Abramowicz/assets/2b.jpg"
        alt="CheeseCake"
        className="ImgProd"
      />
    ),
    descripcion: "La mejor cheesckake estilo newyorkino",
    idCategoria: 1,
  },
  {
    id: 3,
    title: "Brownie",
    price: "$ 300",
    pictureUrl: (
      <img
        src="https://martoabra.github.io/Proyectofinal-JS-Coder-Abramowicz/assets/3b.jpg"
        alt="CheeseCake"
        className="ImgProd"
      />
    ),
    descripcion: "Sos amante del chocolte? es por aca",
    idCategoria: 2,
  },
];

function App() {
  /* const getAPI = async ()=>{
    const RaM = await fetch ("https://rickandmortyapi.com/api/character/2")  
    const res = await RaM.json()
    return res
  }
  */

  const [state, setState] = useState([]);

  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items);
    }, 2000);
  });

  useEffect(() => {
    /*getAPI().then((res)=>{
setState(res.name)
    })*/
    getItem.then((res) => setState(res));
  }, []);

  return (
    <BrowserRouter>
      <NavBar categorias={categorias} />
      <Routes>
        <Route exact path="/" element={<ItemListContainer items={state} />} />
        <Route
          exact
          path="/item/:id"
          element={<ItemDetailContainer items={state} />}
        />
        <Route
          exact
          path="/categoria/:id"
          element={<ItemListContainer items={state} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
