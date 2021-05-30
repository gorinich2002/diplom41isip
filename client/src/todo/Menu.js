import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import "./MenuStyle.css";

// let menuList = [
//     {text: 'Категории'},
//     {text:'asdasd'}

// ]
function CategoryCheckBox(props) {
  // const [filterState, setFilterState] = useState({
  //   vegetables: true,
  //   milk: true,
  //   bread: true,
  // });
const filterState = props.filterState;
  const [render, setRender] = useState(true);

  // function changeCheckListener(e) {
  //   const target  = e.target;
  //   const checked = target.checked;
  //   const newState = filterState;
  //   newState[target.value] = !filterState[target.value];
  //   setFilterState(newState)
  //   console.log(filterState)
  //   setRender(!render)
  

  // }
  const changeCheckListener = props.changeCheckListener;
console.log(filterState)

  
  return (
    <>
      <li className='filterCheckBox'>
        {" "}
        <input checked={filterState.vegetables} id="vegetables" type="checkbox" name="vegetables" value="vegetables" onChange={changeCheckListener}/>{" "}
        <label for="vegetables">Овощи</label>
      </li>
      <li className='filterCheckBox'>
        {" "}
        <input checked={filterState.milk} id="milk"  type="checkbox" name="milk" value="milk" onChange={changeCheckListener}/>{" "}
        <label for="milk">Молочная продукция</label>
      </li>
      <li className='filterCheckBox'>
        {" "}
        <input checked={filterState.bread} id = 'bread' type="checkbox" name="bread" value="bread" onChange={changeCheckListener}/>{" "}
        <label for="bread">Хлебобулочные изделия</label>
      </li>
      <li className='filterCheckBox'>
        {" "}
        <input checked={filterState.meat} id = 'meat' type="checkbox" name="meat" value="meat" onChange={changeCheckListener}/>{" "}
        <label for="meat">Мясные изделия</label>
      </li>
      {/* <li className='filterCheckBox'>
        {" "}
        <input checked={filterState.bread} id = 'bread' type="checkbox" name="bread" value="bread" onChange={changeCheckListener}/>{" "}
        <label for="bread">Хлебобулочные изделия</label>
      </li> */}
    </>
  );
}

function Search(props) {
  return (
    <li className="searchLi">
      <i id="searchIcon" class="fas fa-search"></i>
      <input
        id="menuSearch"
        type="text"
        onChange={props.searchCahgeHandler}
        value={props.value}
      />
    </li>
  );
}

function MenuLi(props) {}

function Menu(props) {
  return (
    <div id="menu">
      <ul className="headerUl">
        <Search
          key="menuSearch"
          searchCahgeHandler={props.searchCahgeHandler}
          value={props.value}
        />
        <CategoryCheckBox filterState={props.filterState} changeCheckListener={props.changeCheckListener} />
      </ul>
    </div>
  );
}

export default Menu;
