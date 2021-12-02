import React from 'react' 
import './NavBar.css'

function NavBar() {
    return (
        <nav className="NavBarItems">
        <h1 className="NavBarLogo">ALMENDRA Y COCO </h1>
        <ul className="NavBarListado">
            <li>Home</li>
            <li>Productos</li>
            <li>FAQ</li>
            <li>Contactanos</li>
        </ul>
        </nav>
    )
}

export default NavBar;