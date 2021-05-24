import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { ReduxMainContext } from "../index";
import { deleteProductIntoCartAction } from "../actions/actions";
import "./CartStyle.css";

function DeleteBtn(props) {
  const id = props.productId;
  const deleteListenr = props.deleteListenr;
  const store = useContext(ReduxMainContext);
  const [isRemove, setRemove] = useState(false)
if(!isRemove){
  return (
    <div className='cart__DeleteBtn'
      onClick={() => {
        deleteListenr(id);
        setRemove(true)
      }}
    >
      Удалить
    </div>
  );
    }
    else{
      return(
        <div className='cart__DeleteText'

        >Товар удалён</div>
      )
    }
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

      <td>{price}</td>
      <td>{count}</td>
      <td>{count*price}</td>
      <td className='btnTd'>
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
        price={product.product.price}
        count={product.count}
        imgname={product.product.imgname}
      />
    );
  });
  if(ProductPositionList.length>0){
  return (
    <div id="cartViewer">
      <h1>Корзина</h1>
      <br />
      <table className="cart__table">
        <tbody>
          <tr className="cartTable__row">
            <td>

            </td>
            <td><b>Название</b></td>

            <td><b>Цена</b></td>
            <td><b>Количество</b></td>
            <td><b>Стоймость</b></td>
            <td>
             
            </td>
          </tr>
          {ProductPositionList}
        </tbody>
      </table>
      <div className='orderBtn'><Link to='/confirm'>Оформить заказ</Link></div>
    </div>
  );
  }
  else{
    return(
      <div id="cartViewer">
      <h1>Корзина</h1>
      <br />
      <h2 className='bigTopMargin'>Корзина пуста</h2>
    </div>
    )
  }
}

export default Cart;
