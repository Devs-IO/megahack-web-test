import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Account/Login";
import NewAccount from "./pages/Account/New";
import Profile from "./pages/Profile";
import Pay from "./pages/Pay";
import Wallet from "./pages/Wallet";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={NewAccount} />
        <Route path="/profile" component={Profile} />
        <Route path="/pay" component={Pay} />
        <Route path="/wallet" component={Wallet} />
      </Switch>
    </BrowserRouter>
  );
}
