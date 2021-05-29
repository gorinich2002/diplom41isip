import { render } from "@testing-library/react";
import "./ProductListStyle.css";
import React, { useContext, useEffect, useState } from "react";
import { ReduxMainContext } from "../index";
import {
  addProductToCartAction,
  deleteProductIntoCartAction,
} from "../actions/actions";

// import ReduxMainContext from '../index'

function ProductCard(props) {
  const [inACart, changeCart] = useState(false);

  let elem = props.product;
  function isThisElemInCart(element) {
    return element.product.id == elem.id;
  }

  useEffect(() => {
    if (contextStore.getState().cart.find(isThisElemInCart)) {
      changeCart(true);
    } else {
      changeCart(false);
    }
  });

  const [count, setCount] = useState(1);

  const decrementCount = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };
  const incrementCount = () => {
    setCount((count) => count + 1);
  };
  function changeCountInput(e) {
    if (!contextStore.getState().cart.find(isThisElemInCart)) {
      let value = e.target.value;

      setCount( +e.target.value);
    }
  }

  let contextStore = useContext(ReduxMainContext);

  function checkMinusValueBlur(e) {
    if (count < 0) {
      setCount(0);
    }
  }
  function addBtnListener() {
    if (count > 0 && count != undefined) {
      contextStore.dispatch(addProductToCartAction(elem, +count));
      // console.log(contextStore.getState().cart);
      changeCart(true);
    }
  }
  function deleteBtnListener() {
    contextStore.dispatch(deleteProductIntoCartAction(elem.id));
    changeCart(false);
    // console.log(contextStore.getState().cart);
  }

  // let imgname = props.imgname;
  // let name = props.name;
  // let desc = props.desc;
  return (
    <>
      <div className="productCard">
        <div>
        <img src={elem.imgname} />
        <h2>
          {elem.name} <span className="productPrice">{elem.price}₽</span>
        </h2>
        </div>
        {/* <p>{elem.desc}</p> */}

      <div>
      <div className="countBlock">
          <div
            className="plusBtn countBtn"
            onClick={decrementCount}
            style={inACart ? { display: "none" } : null}
          >
            -
          </div>

          <input
            type="number"
            className="countInput"
            value={count}
            onChange={changeCountInput}
            onBlur={checkMinusValueBlur}
          ></input>

          <div
            className=" minusBtn countBtn"
            onClick={incrementCount}
            style={inACart ? { display: "none" } : null}
          >
            +
          </div>
        </div>
        {inACart ? (
          <div className="cardBtn deleteBtn" onClick={deleteBtnListener}>
            Убрать товар из корзины
          </div>
        ) : (
          <div className="cardBtn confirmBtn" onClick={addBtnListener}>
            Добавить в корзину
          </div>
        )}
      </div>
       
      </div>
    </>
  );
}

function ProductList(props) {
  const prodList = props.prodList;
  const searchValue = props.searchValue;
  const order = prodList.map((elem) => {
    console.log(elem)
    if(elem.name.toLowerCase().indexOf(searchValue.toLowerCase())!=-1){
    return (
      <>
       
        <ProductCard
          product={elem}
          key={elem.name}
          // name={elem.name}
          // imgname={elem.imgname}
          // desc={elem.desc}
        ></ProductCard>
        
      </>
    );
    }
  });

  return <div id="productViewer">{order}</div>;
}
export default ProductList;
