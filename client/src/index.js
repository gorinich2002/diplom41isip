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
import OrderConfirm from "./todo/OrderConfirm";

const initialState = {
  cart: [],
};

const store = createStore(mainShopReduser, initialState);

export const ReduxMainContext = createContext(null);

const prodList = [
  {
    id: 1,
    name: "Товар1",
    desc: "Описание Описание Описание Описание ",
    imgname: "pic1",
    price: 1000,
  },
  {
    id: 2,
    name: "Товар2",
    desc: "Описание Описание Описание Описание ",
    imgname: "pic1",
    price: 2000,
  },
  {
    id: 3,
    name: "Товар3",
    desc: "Описание Описание Описание Описание ",
    imgname: "pic1",
    price: 3000,
  },
  {
    id: 4,
    name: "Товар4",
    desc: "Описание Описание Описание Описание ",
    imgname: "pic1",
    price: 1020,
  },
  {
    id: 5,
    name: "Товар5",
    desc: "Описание Описание Описание Описание ",
    imgname: "pic1",
    price: 1000,
  },
  {
    id: 6,
    name: "Товар6",
    desc: "Описание Описание Описание Описание ",
    imgname: "pic1",
    price: 1000,
  },
];

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.searchCahgeHandler = this.searchCahgeHandler.bind(this);
    this.state = { searchValue: "" };
  }

  searchCahgeHandler(e) {
    this.setState({ searchValue: e.target.value });
  }

  render() {
  

    return (
      <BrowserRouter>
        <Header key="header"/>
        <main>
          <Menu
            key="menu"
            searchCahgeHandler={this.searchCahgeHandler}
            value={this.state.searchValue}
          />
          <Switch>
            <Route path="/shop">
              <ProductList searchValue={this.state.searchValue} prodList={prodList} />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/confirm">
              <OrderConfirm />
            </Route>
            <Redirect to="/"></Redirect>
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
