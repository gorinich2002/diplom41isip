import { render } from "@testing-library/react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReduxMainContext } from "../index";
import { useHttp } from "../hooks/http.hook";

import "./OrderConfirmStyle.css";
import { Button, Input, Label } from "reactstrap";

function OrderConfirm(prop) {
  const store = useContext(ReduxMainContext);

  const { loading, error, request } = useHttp();
  function sendOrder() {
    const form = document.getElementById("orderForm");
    const formEls = form;
    
    const formData = {
      isSended: false,
      products: store.getState().cart,

      clientData: {
        firstName: formEls["firstName"].value,

        address: formEls["address"].value,

        phone: formEls["phone"].value,
        surname: formEls["surname"].value,

        mail: formEls["mail"].value,
      },

      // orders:[{type: Types.ObjectId, ref:'Orders'}]
    };
  
   
    const loginHandler = async () => {
      try {
       
        const data = await request("/api/order", "POST", { ...formData });
        alert(data.message)
        if (error) {
        }
      } catch (e) {
        if (e.name != "SyntaxError") {
          alert(e.message);
        } else {
          alert("Что-то пошло не так. Попробуйте снова");
        }
      }
      
    };
   
    loginHandler();
   


  
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
                <Label>Фамилия</Label>
              </td>
              <td>
                <Input name="surname" />
              </td>
            </tr>
            <tr>
              <td>
                <Label>Имя</Label>
              </td>
              <td>
                <Input name="firstName" />
              </td>
            </tr>

            <tr>
              <td>
                <Label>Адрес проживания</Label>
              </td>
              <td>
                <Input name="address" />
              </td>
            </tr>
            <tr>
              <td>
                <Label>Номер телефона</Label>
              </td>
              <td>
                <Input name="phone" />
              </td>
            </tr>
            <tr>
              <td>
                <Label>Электронная почта</Label>
              </td>
              <td>
                <Input name="mail" />
              </td>
            </tr>
          </tbody>
        </table>
        {/* <Input name="cart" type="hidden" /> */}
        <Button
      
        size='lg'
          color="danger"
          colspan="2"
          style={{ textAlign: "center" }}
          onClick={sendOrder}
        >
          Заказать
        </Button>
      </form>
    </div>
  );
}

export default OrderConfirm;
