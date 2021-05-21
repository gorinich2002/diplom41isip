import { render } from "@testing-library/react";

import React, { useContext, useEffect, useState } from "react";
import { ReduxMainContext } from "../index";
import { deleteProductIntoCartAction } from "../actions/actions";
import "./CartStyle.css";

function DeleteBtn(props) {
  const id = props.productId;
  const deleteListenr = props.deleteListenr;
  const store = useContext(ReduxMainContext);

  return (
    <div
      onClick={() => {
        deleteListenr(id);
      }}
    >
      Delete
    </div>
  );
}

function ProductPosition(props) {
  const id = props.id;
  const name = props.name;
  const desc = props.desc;
  const imgname = props.imgname;
  const price = props.price;
  const count = props.count;
  const totalPrice = 12334;
  const [isVisible, Hide] = useState(true);
  const store = useContext(ReduxMainContext);
  function deleteListenr(id) {
    store.dispatch(deleteProductIntoCartAction(id));
    Hide(false);
  }

  return (
    <tr className="cartTable__row">
      <td>
        <img className="cart__img" src={`./images/${imgname}.jpg`} />
      </td>
      <td>{name}</td>
      <td>{desc}</td>
      <td>{price}</td>
      <td>{count}</td>
      <td>{totalPrice}</td>
      <td>
        <DeleteBtn deleteListenr={deleteListenr} productId={id} />
      </td>
    </tr>
  );
}

function Cart(props) {
  const store = useContext(ReduxMainContext);

  let productListFromStore = store.getState().cart;

  const ProductPositionList = productListFromStore.map((product) => {
    console.log(product.product);
    return (
      <ProductPosition
        name={product.product.name}
        desc={product.product.desc}
        price={product.product.price}
        count={product.count}
        imgname={product.product.imgname}
      />
    );
  });
  return (
    <div id="cartViewer">
      <h1>Корзина</h1>
      <br />
      <table className="cart__table">
        <tbody>{ProductPositionList}</tbody>
      </table>
    </div>
  );
}

export default Cart;
