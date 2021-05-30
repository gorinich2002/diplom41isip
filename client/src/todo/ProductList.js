import { render } from "@testing-library/react";
import "./ProductListStyle.css";
import React, { useContext, useEffect, useState } from "react";
import { ReduxMainContext } from "../index";
import {
  addProductToCartAction,
  deleteProductIntoCartAction,
} from "../actions/actions";

// import ReduxMainContext from '../index'

function Pagination(props) {
  // const [pugNum, setpugNum] = useState(1)
  // const pugNum = props.pugNum;
  const pugCount = props.pugCount;
  const pugNum = Math.ceil(props.order.length / 9);
  console.log(props.order)
  //const [incrementPugCount , decrementPugCount, setPugNum] =  [props.incrementPugCount , props.decrementPugCount, props.setPugNum]
  const incrementPugCount= props.incrementPugCount
  const decrementPugCount = props.decrementPugCount
  const setPugNum = props.setPugNum
  const lis = [];
  
  for (let i = 1; i <= pugNum; i++) {
    if (i == pugCount) {
      lis.push(
        <li className="pugBtn activePug" onClick={()=>{setPugNum(i-1)}} key={"pugBtn" + i}>
          {i}
        </li>
      );
    } else {
      lis.push(
        <li className="pugBtn"  onClick={()=>{setPugNum(i-1)}} key={"pugBtn" + i}>
          {i}
        </li>
      );
    }
  }
 
  return (
    <ul>
      <li className="pugBtn" onClick={decrementPugCount}>{"<"}</li>
      {lis}

      <li className="pugBtn" onClick={incrementPugCount}>{">"}</li>
    </ul>
  );
}

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

      setCount(+e.target.value);
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
  const filterState = props.filterState;
  const searchValue = props.searchValue;

  

  const [pugCount, setPugCount] = useState(0);

  function incrementPugCount() {
    if (pugCount < pugLen-1) {
      setPugCount(pugCount+1);
    }
   

  }
  function decrementPugCount() {
    if (pugCount > 0) {
      setPugCount(pugCount-1);
    }
    console.log(pugCount)
  }

  function setPugNum(pugNum) {
    setPugCount(pugNum);
  }
  console.log(prodList  )
  const order = [];
  for(let i = 0; i<prodList.length; i++){
 

    if (
      prodList[i].name.toLowerCase().indexOf(searchValue.toLowerCase()) != -1 &&
      filterState[ prodList[i].category]
    ) {
      order.push (
        <>
          <ProductCard
            product={ prodList[i]}
            key={ prodList[i].name}
            // name={elem.name}
            // imgname={elem.imgname}
            // desc={elem.desc}
          ></ProductCard>
        </>
      );
    }
  };
  const pugLen = Math.ceil(order.length / 9);
  return (
    <>
      <div id="productViewer">
        <div className="flex">
          {order.slice(pugCount * 9, (pugCount + 1) * 9)}
        </div>
        <div className="pug">
          <Pagination
            pugNum={pugLen}
            order = {order}
            pugCount={pugCount + 1}
            incrementPugCount={incrementPugCount}
            decrementPugCount = {decrementPugCount}
            setPugNum = {setPugNum}
          />
        </div>
      </div>
    </>
  );
}
export default ProductList;
