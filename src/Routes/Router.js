import React from "react";
import Home from "../Sessions/Home/Home";
import Cart from "../Sessions/Cart/Cart";
import Login from "../Sessions/Login/Login";
import SingUp from "../Sessions/SingUp/SingUp";
import ToEdit from "../Sessions/ToEdit/ToEdit";
import Search from "../Sessions/Search/Search";
import Profile from "../Sessions/Profile/Profile";
import RegisterAdress from "../Sessions/RegisterAdress/RegisterAdress";

import { BrowserRouter, Switch, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>

        <Route exact path={"/login"}>
          <Login />
        </Route>

        <Route exact path={"/cart"}>
          <Cart />
        </Route>

        <Route exact path={"/profile/:id"}>
          <Profile />
        </Route>

        <Route exact path={"/register-adress"}>
          <RegisterAdress />
        </Route>

        <Route exact path={"/search"}>
          <Search />
        </Route>

        <Route exact path={"/sing-up"}>
          <SingUp />
        </Route>

        <Route exact path={"/to-edit"}>
          <ToEdit />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
