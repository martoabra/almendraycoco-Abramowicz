import React from 'react'

export default function Basket(props) {
    const {cartItems, onAdd}=props;
    return (
        <aside className='block col-1'>
            <h2>Cart Items</h2>
            <div>
                {cartItems.lenght == 0 && console.log("Hola")}
                </div>
                {cartItems.map ((item)=>(
                    <div key={item.id}>
                        <div>
                            {item.qty} x ${item.price}
                        </div>
                    </div>
                )

                )}
        </aside>
    )
}
 