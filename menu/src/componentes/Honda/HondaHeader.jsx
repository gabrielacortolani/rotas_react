import React from 'react'
import { Link } from 'react-router-dom'

import '../Header/Header.css'

export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to="/"> Voltar </Link> </li>
                    <li> <Link to="/honda"> City </Link></li>
                    <li> <Link to="/honda"> Trail </Link></li>
                    <li> <Link to="/honda"> Off Road </Link></li>
                    <li> <Link to="/honda"> Sport </Link></li>
                    <li> <Link to="/honda"> Scooter </Link></li>
                </ul>
            </nav>
        </div>
    )
}

