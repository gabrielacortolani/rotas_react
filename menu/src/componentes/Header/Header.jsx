import React from 'react'

// importar pacote Link que é parte do react-router-dom
import { Link } from 'react-router-dom'

import './Header.css'

export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to="/"> Inicio </Link> </li>
                    <li> <Link to="/harley"> Harley </Link></li>
                    <li> <Link to="/suzuki"> Suzuki </Link></li>
                    <li> <Link to="/honda"> Honda </Link></li>
                    <li> <Link to="/yamaha"> Yamaha </Link></li>
                    <li> <Link to="/lambreta"> Lambreta </Link></li>
                </ul>
            </nav>
        </div>
    )
}

