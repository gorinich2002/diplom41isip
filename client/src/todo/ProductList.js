import { render } from "@testing-library/react";
import "./ProductListStyle.css";
import React, { useContext, useEffect, useState } from "react";
import { ReduxMainContext } from "../index";
import {
  addProductToCartAction,
  deleteProductIntoCartAction,
} from "../actions/actions";
import {Button,Card, ButtonGroup} from 'reactstrap';
// import ReduxMainContext from '../index'

function Pagination(props) {
  const pugCount = props.pugCount;
  const pugNum = Math.ceil(props.order.length / 9);
   const incrementPugCount= props.incrementPugCount
  const decrementPugCount = props.decrementPugCount
  const setPugNum = props.setPugNum
  const lis = [];
  for (let i = 1; i <= pugNum; i++) {
    if (i == pugCount) {
      lis.push(
        <Button color="danger" onClick={()=>{setPugNum(i-1)}} key={"pugBtn" + i}>
          {i}
        </Button>
      );
    } else {
      lis.push(
        <Button  onClick={()=>{setPugNum(i-1)}} key={"pugBtn" + i}>
          {i}
        </Button>
      );
    }
  }
  return (
  <ButtonGroup style={{marginTop:'20px'}}>
      <Button onClick={decrementPugCount}>{"<"}</Button>
      {lis}

      <Button onClick={incrementPugCount}>{">"}</Button>
    </ButtonGroup>
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
      changeCart(true);
    }
  }
  function deleteBtnListener() {
    contextStore.dispatch(deleteProductIntoCartAction(elem.id));
    changeCart(false);
  }
  return (
    <>
    
      <Card className="productCard">
        <div>
          <img src={elem.imgname} />
          <p>
            {elem.name} <span className="productPrice">{elem.price.toFixed(2)}₽</span>
          </p>
        </div>
        {/* <p>{elem.desc}</p> */}

        <div>
          <div className="countBlock">
            <Button
              color="danger"
              size='sm'

              onClick={decrementCount}
              style={inACart ? { display: "none" } : null}
            >
              -
            </Button>

            <input
              type="number"
              className="countInput"
              value={count}
              onChange={changeCountInput}
              onBlur={checkMinusValueBlur}
            ></input>

            <Button
              color="danger"
              size='sm'
              onClick={incrementCount}
              style={inACart ? { display: "none" } : null}
            >
              +
            </Button>
          </div>
          {inACart ? (
            <Button  block color="danger" size='sm'  onClick={deleteBtnListener}>
              Убрать товар из корзины
            </Button>
          ) : (
            <Button  block color="danger" size='sm'  onClick={addBtnListener}>
              Добавить в корзину
            </Button>
          )}
        </div>
      </Card>
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
