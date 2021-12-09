import React from 'react' 
import './NavBar.css'
import carrito from '../assets/carrito.png'


const Carrito = (props) => {
    return (
        <img src={carrito} alt="Carrito" className="NavBarCarrito"/>
    );
}

export default Carrito