import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import "./MenuStyle.css";
import{Input, Label} from 'reactstrap'
function CategoryCheckBox(props) {
const filterState = props.filterState;
  const [render, setRender] = useState(true);
  const changeCheckListener = props.changeCheckListener;
  return (
    <>
      <li className='filterCheckBox'>
        
        <Input checked={filterState.vegetables} id="vegetables" type="checkbox" name="vegetables" value="vegetables" onChange={changeCheckListener}/>
        <Label for="vegetables">Овощи</Label>
      </li>
      <li className='filterCheckBox'>
        
        <Input checked={filterState.milk} id="milk"  type="checkbox" name="milk" value="milk" onChange={changeCheckListener}/>
        <Label for="milk">Молочная продукция</Label>
      </li>
      <li className='filterCheckBox'>
        
        <Input checked={filterState.bread} id = 'bread' type="checkbox" name="bread" value="bread" onChange={changeCheckListener}/>
        <Label for="bread">Хлебобулочные изделия</Label>
      </li>
      <li className='filterCheckBox'>
        
        <Input checked={filterState.meat} id = 'meat' type="checkbox" name="meat" value="meat" onChange={changeCheckListener}/>
        <Label for="meat">Мясные изделия</Label>
      </li>
    
    </>
  );
}
function Search(props) {
  return (
    <li className="searchLi">
      <i id="searchIcon" class="fas fa-search"></i>
      <Input
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
    <ul style={{paddingLeft:'0'}}>
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
