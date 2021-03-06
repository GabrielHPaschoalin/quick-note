import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import Home from "./Pages/Home";

function Routes (){

    return(

        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/home" component={Home}/>
            </Switch>
        </BrowserRouter>

    );
}

export default Routes;