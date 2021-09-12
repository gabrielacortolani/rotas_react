import React from 'react'

import './Honda.css'
import Inicio from '../Inicio/Inicio.jsx'
import Titulo from '../Titulo/Titulo.jsx'
import CursosHeader from './HondaHeader.jsx'
import { Route, Switch } from 'react-router'

export default function Honda() {
    return (
        <div>
            <CursosHeader />

            <Titulo texto="Honda" />

            <div className="honda">
                <Switch>
                    <Route exact path="/" render={(props) => <Inicio />}></Route>

                </Switch>
            </div>

        </div>

    )
}

