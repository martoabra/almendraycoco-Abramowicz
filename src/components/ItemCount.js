import React, {useState} from "react";
import './Item.css'

export default function Contador({stock, initial}) {
 let  [state, setState] = useState (initial);


 const SumaClick =()=>{
  if (state<stock){
     setState(++state)
  } 

 }

 const RestaClick =()=>{
  if (state>0){
     setState(--state)
  } 


 }
  return (
    <div>
      <h1>Cantidad de Items {state}</h1>
      <button onClick={SumaClick}>Agregar al Carrito</button>
      <button onClick={RestaClick}>Restar al Carrito</button>
    </div>
  );
}

