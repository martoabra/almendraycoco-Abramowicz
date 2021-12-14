import React, {useState} from "react";


export default function Contador({stock, initial, onAdd}) {
 let  [state, setState] = useState (0);

 const handleClick =()=>{
   setState(++state)
 }
  return (
    <div>
      <h1>Cantidad de Items {state}</h1>
      <button onClick={handleClick}>Agregar al Carrito</button>
    </div>
  );
}

