import React, {useState} from "react";
import './Item.css'
import Contador from '../components/ItemCount'


function ItemDetail({ item }) {
    
    return (
        <div className="ItemContainer">
            {/* <div>
                {item.id }
            </div> */}
            <div>
                {item.title }
            </div>
            <div>
                {item.price }
            </div>
            <div>
                {item.pictureUrl }
            </div>
            <div>
                {item.descripcion }
            </div>

        
{state ? (
  <><Contador stock="5" initial="1" onAdd={onAdd} /></>): )}
</div>


    );
}
   

export default ItemDetail
