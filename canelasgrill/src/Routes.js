import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Sobre from './pages/Sobre/Sobre';
import Reserva from './pages/Reserva/Reserva';
import Menu from './pages/Menu/Menu';


export default() => {

    return(
        <Switch>
            <Route exact path = "/">
                <Home/>
            </Route>

            <Route exact path = "/sobre">
                <Sobre/>
            </Route>
            <Route exact path = "/reserva">
                <Reserva/>
            </Route>
            <Route exact path = "/menu">
                <Menu/>
            </Route>


            
        </Switch>
    );
}