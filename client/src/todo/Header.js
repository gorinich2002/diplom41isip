import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReduxMainContext } from "../index";
import "./HeaderStyle.css";
import { Navbar, NavLink , Nav  } from "reactstrap";
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
    <NavLink >
      <Link to={headerElement.href}>{headerElement.text}</Link>
    </NavLink >
  ));

  return headerContent;
}

function Header() {
  const store = useContext(ReduxMainContext);

  const [cartCount, setCartCount] = useState(0);

  function handleChange() {
    setCartCount(store.getState().cart.length);
  }

  const unsubscribe = store.subscribe(handleChange);

  return (
    <header id="header">
      <Navbar color="danger"  dark style={{listStyle:'none'}}>
       <Nav>
       <NavLink >
          <Link to="/about">Оплата и доставка</Link>
        </NavLink >
        <NavLink >
          <Link to="/shop">Каталог</Link>
        </NavLink >

        <NavLink >
          <Link to="/cart">
            Корзина <div id="cartCounter">{cartCount}</div>
          </Link>
        </NavLink >
       </Nav>
        {/* <NavLink >
    <Link to='/howToPay'>Вход</Link>
    </NavLink > */}
      </Navbar>
    </header>
  );
}

export default Header;
