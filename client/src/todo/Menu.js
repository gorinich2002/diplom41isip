import { render } from "@testing-library/react";
import { useEffect, useState } from "react";

// let menuList = [
//     {text: 'Категории'},
//     {text:'asdasd'}

// ]
function CategoryCheckBox(props) {
  const [filterState, setFilterState] = useState({
    vegetables: true,
    milk: true,
    bread: true,
  });
  function changeCheckListener(e) {
    const target  = e.target;
    const checked = target.checked;
    const newState = filterState;
    newState[target.value] = !filterState[target.value];
    setFilterState(newState)
    console.log(filterState)
  

  }
  useEffect(()=>{})

  
  return (
    <>
      <li>
        {" "}
        <input checked={filterState.vegetables} id="vegetables" type="checkbox" name="vegetables" value="vegetables" onChange={changeCheckListener}/>{" "}
        <label for="vegetables">Овощи</label>
      </li>
      <li>
        {" "}
        <input checked={filterState.milk} id="milk"  type="checkbox" name="milk" value="milk" onChange={changeCheckListener}/>{" "}
        <label for="milk">Молочная продукция</label>
      </li>
      <li>
        {" "}
        <input checked={filterState.bread} id = 'bread' type="checkbox" name="bread" value="bread" onChange={changeCheckListener}/>{" "}
        <label for="bread">Хлебобулочные изделия</label>
      </li>
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
        <CategoryCheckBox />
      </ul>
    </div>
  );
}

export default Menu;
