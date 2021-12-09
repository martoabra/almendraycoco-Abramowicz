import React from 'react' 
import './NavBar.css'
import Carrito from './CartWidget.js'
function NavBar() {
    return (
        <nav className="NavBarItems">
        <h1 className="NavBarLogo">ALMENDRA Y COCO </h1>
        <ul className="NavBarListado">
            <li>Home</li>
            <li>Productos</li>
            <li>FAQ</li>
            <li>Contactanos</li>
            <Carrito></Carrito>
        </ul>
        </nav>
    )
}

export default NavBar;