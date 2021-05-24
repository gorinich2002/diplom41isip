import { render } from "@testing-library/react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReduxMainContext } from "../index";
import "./OrderConfirmStyle.css";

function OrderConfirm(prop) {
  return (
    <div id="cartViewer">
      <h1>Оформление заказа</h1>
      <form id='orderForm' className="orderForm">
        <table>
          <tbody>
            <tr>
              <td>
                <label>Фамилия</label>
              </td>
              <td>
                <input name='surname'/>
              </td>
            </tr>
            <tr>
              <td>
                <label>Имя</label>
              </td>
              <td><input name='name'/></td>
              
            </tr>
           
            <tr>
             
              <td>
                <label>Адрес проживания</label>
              </td>
              <td><input name='address' /></td>
              
            </tr>
            <tr>
             
              <td>
                <label>Номер телефона</label>
              </td>
              <td><input name='phone'/></td>
              
            </tr>
            <tr>
             
              <td>
                <label>Электронная почта</label>
              </td>
              <td><input name='mail' /></td>
              
            </tr>
    
            <tr>
              <td id ='' colspan="2" style={{textAlign:"center"}}>Заказать</td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default OrderConfirm;
