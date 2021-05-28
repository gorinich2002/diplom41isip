import { render } from "@testing-library/react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReduxMainContext } from "../index";
import "./HeaderStyle.css";
// Меняй массив ниже что бы изменить шапку

let defaultHeaderList = [
  { text: "Оплата и доставка", href: "/howToPay" },

  { text: "Каталог", href: "/shop" },
  { text: "Корзина", href: "/cart" },
  { text: "Вход", href: "/login" },
];

// Меняй массив выше что бы изменить шапку

function HeaderLi(props) {
  const headerContent = defaultHeaderList.map((headerElement) => (
    <li>
      <Link to={headerElement.href}>{headerElement.text}</Link>
    </li>
  ));

  return headerContent;
}

function Header() {
    const store = useContext(ReduxMainContext)

  const [cartCount, setCartCount] = useState(0)
  
  function handleChange() {
    setCartCount(store.getState().cart.length);
  }

  const unsubscribe = store.subscribe(handleChange)

  return (
    <header id="header">
      <ul className="headerUl">
      <li>
      <Link to='/about'>Оплата и доставка</Link>
    </li>
    <li>
    <Link to='/shop'>Каталог</Link>
    </li>

    <li>
    <Link to='/cart'>Корзина <div id='cartCounter'>{cartCount}</div></Link>
    </li>
    <li>
    <Link to='/howToPay'>Вход</Link>
    </li>
      </ul>
    </header>
  );
}

export default Header;
