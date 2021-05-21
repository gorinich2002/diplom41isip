import { render } from "@testing-library/react";

let menuList = [
    {text: 'Категории'},
    {text:'asdasd'}

]



function Search(props) {
  return (
    <li className= 'searchLi'>
         <i id = 'searchIcon' class="fas fa-search"></i><input id ='menuSearch' type="text" onChange={props.searchCahgeHandler} value={props.value} />
    </li>
  );
}

function MenuLi(props) {
    
}

function Menu(props) {
  return (
    <div id = 'menu'>
      <ul className="headerUl">
        <Search key="menuSearch" searchCahgeHandler = {props.searchCahgeHandler} value={props.value}></Search>

      </ul>
    </div>
  );
}

export default Menu;
