import React, { createContext, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./fontawesome/css/all.min.css";
import Header from "./todo/Header.js";
import Menu from "./todo/Menu.js";
import ProductList from "./todo/ProductList.js";
import { createStore } from "redux";
import mainShopReduser from "./redusers/mainReduser";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Cart from "./todo/Cart";
import About from "./todo/About";
import LoginForm from "./todo/LoginForm";
import RegisterForm from "./todo/RegisterForm";

import OrderConfirm from "./todo/OrderConfirm";
import prodList from "./prodlist.json";

const initialState = {
  cart: [],
};

const store = createStore(mainShopReduser, initialState);

export const ReduxMainContext = createContext(null);
//vegetables

function Root(props) {
  const [filterState, setFilterState] = useState({
    searchValue: "",
    pig: true,
    cow: true,
    sheep: true,
    bird: true,
  });

  function searchCahgeHandler(e) {
    setFilterState({ ...filterState, searchValue: e.target.value });
  }
  function changeCheckListener(e) {
    const target = e.target;
    const checked = target.checked;
    setFilterState({ ...filterState, [target.value]: checked });
  }

  return (

      <BrowserRouter>
        <Header key="header" />
        <main>
         
          <Switch>
            <Route path="/shop">
            <Menu
            filterState={{
              pig: filterState.pig,
              cow: filterState.cow,
              sheep: filterState.sheep,
              bird: filterState.bird,
            }}
            changeCheckListener={changeCheckListener}
            key="menu"
            searchCahgeHandler={searchCahgeHandler}
            value={filterState.searchValue}
          />
              <ProductList
                filterState={{
                  pig: filterState.pig,
                  cow: filterState.cow,
                  sheep: filterState.sheep,
                  bird: filterState.bird,
                }}
                searchValue={filterState.searchValue}
                prodList={prodList}
              />
            </Route>
            <Route path="/cart">
              
              <Cart />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/confirm">
              <OrderConfirm />
            </Route>
            <Route path="/login">
              <LoginForm/>
            </Route>
            <Route path="/register">
              <RegisterForm />
            </Route>
            <Redirect to="/shop"></Redirect>
          </Switch>
        </main>
      </BrowserRouter>
  );
}

ReactDOM.render(
  <ReduxMainContext.Provider value={store}>
    <Root></Root>
  </ReduxMainContext.Provider>,
  document.getElementById("root")
);

export default store;

// export default ReduxMainContext;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
