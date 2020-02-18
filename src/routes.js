import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Account/Login";
import NewAccount from "./pages/Account/New";
import Profile from "./pages/Profile";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={NewAccount} />
        <Route path="/profile" component={Profile} />

      </Switch>
    </BrowserRouter>
  );
}
