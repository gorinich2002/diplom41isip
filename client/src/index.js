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
import OrderConfirm from "./todo/OrderConfirm";

const initialState = {
  cart: [],
};

const store = createStore(mainShopReduser, initialState);

export const ReduxMainContext = createContext(null);
//vegetables
const prodList = [
  {
    name: "Картофель Metro Chef Для запекания, 2,5 кг",
    imgname: "https://cdn.metro-cc.ru/ru/ru_pim_28225001001_01.png",
    price: 66.9,
    id: 0,
    category: "vegetables",
  },
  {
    name: "Картофель Metro Chef Для жарки, 2,5 кг",
    imgname: "https://cdn.metro-cc.ru/ru/ru_pim_28222001001_01.png",
    price: 63.56,
    id: 1,
    category: "vegetables",
  },
  {
    name: "Картофель Metro Chef Для варки, 2,5 кг",
    imgname: "https://cdn.metro-cc.ru/ru/ru_pim_28221001001_01.png",
    price: 66.9,
    id: 2,
    category: "vegetables",
  },
  {
    name: "Картофель Metro Chef Красный мытый, 2,5 кг",
    imgname: "https://cdn.metro-cc.ru/ru/ru_pim_64865001001_01.png",
    price: 63.56,
    id: 3,
    category: "vegetables",
  },
  {
    name: "Картофель Metro Chef Белый мытый, 2,5 кг",
    imgname: "https://cdn.metro-cc.ru/ru/ru_pim_38839001001_01.png",
    price: 64.9,
    id: 4,
    category: "vegetables",
  },
  {
    name: "Томат Metro Chef коктейльный на ветке, 500г",
    imgname: "https://cdn.metro-cc.ru/ru/ru_pim_92212001001_01.png",
    price: 61.66,
    id: 5,
    category: "vegetables",
  },
  {
    name: "Огурцы БАКИНСКИЕ 250 г",
    imgname: "https://cdn.metro-cc.ru/ru/ru_pim_376973001001_01.png",
    price: 64.9,
    id: 6,
    category: "vegetables",
  },
  {
    name: "Томаты розовые (азербайджан)",
    imgname: "https://cdn.metro-cc.ru/ru/ru_pim_537226001001_01.png",
    price: 61.66,
    id: 7,
    category: "vegetables",
  },
  {
    name: "Томаты сливка ардилес, 500г",
    imgname: "https://cdn.metro-cc.ru/ru/ru_pim_378636001001_01.png",
    price: 59.9,
    id: 8,
    category: "vegetables",
  },
  {
    name: "Капуста цветная",
    imgname: "https://cdn.metro-cc.ru/ru/ru_pim_209171001001_01.png",
    price: 56.91,
    id: 9,
    category: "vegetables",
  },
  {
    name: "Имбирь",
    imgname: "https://cdn.metro-cc.ru/ru/ru_pim_509763001001_01.png",
    price: 259.9,
    id: 10,
    category: "vegetables",
  },
  {
    name: "ПЕРЕЦ ЧИЛИ КРАСНЫЙ ОСТРЫЙ МИНИ 100Г",
    imgname: "https://cdn.metro-cc.ru/ru/ru_pim_124662001001_01.png",
    price: 246.9,
    id: 11,
    category: "vegetables",
  },
  {
    name: "Томаты МОЕ ЛЕТО Кумато мини, 250 г",
    imgname: "https://cdn.metro-cc.ru/ru/ru_pim_185028001001_01.png",
    price: 129.9,
    id: 12,
    category: "vegetables",
  },
  {
    name: "Капуста брокколи",
    imgname: "https://cdn.metro-cc.ru/ru/ru_pim_449508001001_01.png",
    price: 269.9,
    id: 13,
    category: "vegetables",
  },
  {
    name: "Перец желтый",
    imgname: "https://cdn.metro-cc.ru/ru/ru_pim_209187001001_01.png",
    price: 269.9,
    id: 14,
    category: "vegetables",
  },
];
console.log(prodList[1]);
// const prodList = [
//   {
//     id: 1,
//     name: "Товар1",
//     desc: "Описание Описание Описание Описание ",
//     imgname: "pic1",
//     price: 1000,
//   },
//   {
//     id: 2,
//     name: "Товар2",
//     desc: "Описание Описание Описание Описание ",
//     imgname: "pic1",
//     price: 2000,
//   },
//   {
//     id: 3,
//     name: "Товар3",
//     desc: "Описание Описание Описание Описание ",
//     imgname: "pic1",
//     price: 3000,
//   },
//   {
//     id: 4,
//     name: "Товар4",
//     desc: "Описание Описание Описание Описание ",
//     imgname: "pic1",
//     price: 1020,
//   },
//   {
//     id: 5,
//     name: "Товар5",
//     desc: "Описание Описание Описание Описание ",
//     imgname: "pic1",
//     price: 1000,
//   },
//   {
//     id: 6,
//     name: "Товар6",
//     desc: "Описание Описание Описание Описание ",
//     imgname: "pic1",
//     price: 1000,
//   },
// ];

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
        <Header key="header" />
        <main>
          <Menu
            key="menu"
            searchCahgeHandler={this.searchCahgeHandler}
            value={this.state.searchValue}
          />
          <Switch>
            <Route path="/shop">
              <ProductList
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
