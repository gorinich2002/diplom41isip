import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./fontawesome/css/all.min.css";
import { Provider } from "react-redux";
//todos
import Header from "./todo/Header.js";
import Menu from "./todo/Menu.js";
import ProductList from "./todo/ProductList.js";
import { createStore } from "redux";
import { addProductToCartAction } from "./actions/actions";
import mainShopReduser from "./redusers/mainReduser";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Cart from "./todo/Cart";
import About from "./todo/About";
import LoginForm from "./todo/LoginForm";
import RegisterForm from "./todo/RegisterForm";


import OrderConfirm from "./todo/OrderConfirm";
import prodList from './prodlist.json';
import AuthContext from './context/AuthContext'


// import {useAuth} from './hooks/auth.hook';
// const  { login, logout, token, userId } = useAuth()




const initialState = {
  cart: [],
};

const store = createStore(mainShopReduser, initialState);

export const ReduxMainContext = createContext(null);
//vegetables

console.log(prodList[1]);


class Root extends React.Component {
  constructor(props) {
    super(props);
    this.searchCahgeHandler = this.searchCahgeHandler.bind(this);
    this.changeCheckListener = this.changeCheckListener.bind(this);

    
    this.state = { searchValue: "", vegetables: true,
    milk: true,
    bread: true,
    meat:true};
  }

  searchCahgeHandler(e) {
    this.setState({ searchValue: e.target.value });
  }
  changeCheckListener(e) {
    const target  = e.target;
    const checked = target.checked;
    // const newState = filterState;
    // newState[target.value] = !filterState[target.value];
    // setFilterState(newState)
    // console.log(filterState)
    // setRender(!render)
    this.setState({ [target.value]: checked });
  

  }
  render() {
    return (
      <BrowserRouter>
        <Header key="header" />
        <main>
          <Menu
          filterState = {{milk: this.state.milk,bread: this.state.bread,vegetables: this.state.vegetables,meat: this.state.meat}}
          changeCheckListener = {this.changeCheckListener}
            key="menu"
            searchCahgeHandler={this.searchCahgeHandler}
            value={this.state.searchValue}
          />
          <Switch>
            <Route path="/shop">
              <ProductList
               filterState = {{milk: this.state.milk,bread: this.state.bread,vegetables: this.state.vegetables,meat: this.state.meat}}
                searchValue={this.state.searchValue}
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
              <LoginForm />
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
