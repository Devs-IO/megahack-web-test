import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home';

export default function App() {
    return (
        <div>
            épe
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
            </BrowserRouter>
        </div>
    )
}
