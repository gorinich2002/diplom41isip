import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { ReduxMainContext } from "../index";
import { deleteProductIntoCartAction } from "../actions/actions";
import "./CartStyle.css";
import {Button} from 'reactstrap'
function DeleteBtn(props) {
  const id = props.productId;
  const deleteListenr = props.deleteListenr;
  const store = useContext(ReduxMainContext);
  const [isRemove, setRemove] = useState(false)
if(!isRemove){
  return (
    <Button
    color="danger"
      onClick={() => {
        deleteListenr(id);
        setRemove(true)
      }}
    >
      Удалить
    </Button>
  );
    }
    else{
      return(
        <Button

        >Товар удалён</Button>
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
    store.dispatch(deleteProductIntoCartAction(name));
    Hide(false);
  }

  return (
    <tr className="cartTable__row">
      <td>
        <img className="cart__img" src={imgname} />
      </td>
      <td>{name}</td>

      <td>{price}</td>
      <td>{count}</td>
      <td>{(count*price).toFixed(2)}</td>
      <td className='btnTd'>
        <DeleteBtn deleteListenr={deleteListenr} productId={id} />
      </td>
    </tr>
  );
}

function Cart(props) {
  const store = useContext(ReduxMainContext);

  let productListFromStore = store.getState().cart;
  let totalPrice = 0;
  const ProductPositionList = productListFromStore.map((product) => {
   
    totalPrice +=product.product.price*product.count;
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

          <tr className="cartTable__row">
      <td>
        
      </td>
      <td>Итого:</td>
      <td></td>

     
      <td></td>
      <td>{totalPrice.toFixed(2)}</td>
      <td >
        
      </td>
    </tr>
        </tbody>
      </table>
      <Button color="danger"><Link to='/confirm'>Оформить заказ</Link></Button>
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
