import { render } from "@testing-library/react";
import { Link } from "react-router-dom";


// Меняй массив ниже что бы изменить шапку 

let defaultHeaderList = [
   
  
    {text:'Оплата и доставка', href:'/howToPay'},
    
    {text:'Каталог', href:'/shop'}, 
    {text:'Корзина', href:'/cart'},
    {text:'Войти', href: '/login'},
    
   
]

// Меняй массив выше что бы изменить шапку 

function HeaderLi(props) {
    const headerContent = defaultHeaderList.map((headerElement)=>
         <li><Link to={headerElement.href}>{headerElement.text}</Link></li>
        )
       
    return(
        headerContent
    )
}

function Header() {
   
        return(
            <header id = 'header'>
            <ul className = 'headerUl'>
                <HeaderLi key='headerUl'></HeaderLi>
            </ul>
            </header>
        )
    
}

export default Header;
