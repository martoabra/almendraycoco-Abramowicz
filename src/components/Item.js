import React from "react";
import './Item.css'

function Item({ item }) {
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
        </div>
    );
}
   

export default Item