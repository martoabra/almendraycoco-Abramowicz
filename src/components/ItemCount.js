import React, {useState} from "react";
import './Item.css'


export default function Contador({stock, initial, onAdd}) {
 let  [state, setState] = useState (initial);
 let [TotItems] = {};


 const SumaClick =()=>{
  if (state<stock){
     setState(++state)
     TotItems = ++TotItems;
  } 

 }

 const RestaClick =()=>{
  if (state>0){
     setState(--state)
     TotItems = --TotItems;
  } 


 }


  

  return (
    <div>
   
      <button onClick={SumaClick}>Agregar al Carrito</button>
      <button onClick={RestaClick}>Restar al Carrito</button>
    </div>
  );
}


