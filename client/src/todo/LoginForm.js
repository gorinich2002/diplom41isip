import { render } from "@testing-library/react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReduxMainContext } from "../index";
import "./OrderConfirmStyle.css";
import { useHttp } from "../hooks/http.hook";
function LoginForm(prop) {
  const { loading, error, request } = useHttp();

    const loginHandler = async ()=>{
        try {
            console.log(formData);
            const data = await request("/api/auth/login", "POST", {...formData})
           
        } catch (error) {
            
        }
    }
  const store = useContext(ReduxMainContext);
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });
  function changeFormHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function sendOrder() {
    // const form = document.getElementById("orderForm");
    // const formEls = form;

    console.log(formData);
    // form.submit();
  }
  return (
    <div id="cartViewer">
      <h1>Вход</h1>
      <form id="orderForm" className="orderForm" method="POST">
        <table>
          <tbody>
            <tr>
              <td>
                <label>Логин</label>
              </td>
              <td>
                <input
                  onChange={changeFormHandler}
                  value={formData.login}
                  name="login"
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Пароль</label>
              </td>
              <td>
                <input
                  onChange={changeFormHandler}
                  value={formData.password}
                  name="password"
                  type="password"
                />
              </td>
            </tr>
          </tbody>
        </table>
        {/* <input name="cart" type="hidden" /> */}
        <div
          id="orderBtn"
          colspan="2"
          style={{ textAlign: "center" }}
          onClick={loginHandler}
          disabled={loading}
        >
          Войти
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
