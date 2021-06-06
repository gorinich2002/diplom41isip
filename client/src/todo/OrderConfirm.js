import { render } from "@testing-library/react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReduxMainContext } from "../index";
import "./OrderConfirmStyle.css";


function OrderConfirm(prop) {

  const store =useContext(ReduxMainContext);

 
  function sendOrder() {
    const form = document.getElementById("orderForm");
    const formEls = form;
    const formData ={
        cart:store.getState().cart,
       
        firstName:formEls['firstName'].value,

        address:formEls['address'].value,

        phone:formEls['phone'].value,
        surname:formEls['surname'].value,

        mail:formEls['mail'].value,
        isSended: false
    }
  //   const formData ={
  //     cart:store.getState().cart,
     
  //     firstName:formEls['firstName'].value,

  //     address:formEls['address'].value,

  //     phone:formEls['phone'].value,
  //     surname:formEls['surname'].value,

  //     mail:formEls['mail'].value,
  //     isSended: false
  // }

   
    console.log(formData);
    // form.submit();
  }
  return (
    <div id="cartViewer">
      <h1>Оформление заказа</h1>
      <form id="orderForm" className="orderForm" method="POST">
        <table>
          <tbody>
            <tr>
              <td>
                <label>Фамилия</label>
              </td>
              <td>
                <input name="surname" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Имя</label>
              </td>
              <td>
                <input name="firstName" />
              </td>
            </tr>

            <tr>
              <td>
                <label>Адрес проживания</label>
              </td>
              <td>
                <input name="address" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Номер телефона</label>
              </td>
              <td>
                <input name="phone" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Электронная почта</label>
              </td>
              <td>
                <input name="mail" />
              </td>
            </tr>
          </tbody>
        </table>
        {/* <input name="cart" type="hidden" /> */}
        <div
          id="orderBtn"
          colspan="2"
          style={{ textAlign: "center" }}
          onClick={sendOrder}
        >
          Заказать
        </div>
      </form>
    </div>
  );
}

export default OrderConfirm;
