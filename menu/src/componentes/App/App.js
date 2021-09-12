import React from 'react'
import './App.css';

import Header from '../Header/Header.jsx'
import Inicio from '../Inicio/Inicio.jsx'
import Harley from '../Harley/Harley.jsx'
import Suzuki from '../Suzuki/Suzuki.jsx'
import Honda from '../Honda/Honda.jsx'
import Yamaha from '../Yamaha/Yamaha.jsx'
import Lambreta from '../Lambreta/Lambreta.jsx'

import { Route, Switch} from 'react-router'

function App() {
  return (
    <div>
 
      <Header />
      
      <main>
        <Switch>
          <Route exact path = "/" render = {(props) => <Inicio/>}></Route>
          <Route exact path = "/harley" render = {(props) => <Harley/>}></Route>
          <Route exact path = "/suzuki" render = {(props) => <Suzuki/>}></Route>
          <Route exact path = "/honda" render = {(props) => <Honda/>}></Route>
          <Route exact path = "/yamaha" render = {(props) => <Yamaha/>}></Route>
          <Route exact path = "/lambreta" render = {(props) => <Lambreta/>}></Route>
        </Switch>

      </main>
      
    </div>
  );
}

export default App;

