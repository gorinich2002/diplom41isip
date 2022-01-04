import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import "./MenuStyle.css";
import{Input, Label} from 'reactstrap'
function CategoryCheckBox(props) {
const filterState = props.filterState;
  const changeCheckListener = props.changeCheckListener;
  return (
    <>
      <li className='filterCheckBox'>
        
        <Input checked={filterState.pig} id="pig" type="checkbox" name="pig" value="pig" onChange={changeCheckListener}/>
        <Label for="pig">Свинина</Label>
      </li>
      <li className='filterCheckBox'>
        
        <Input checked={filterState.cow} id="cow"  type="checkbox" name="cow" value="cow" onChange={changeCheckListener}/>
        <Label for="cow">Говядина</Label>
      </li>
      <li className='filterCheckBox'>
        
        <Input checked={filterState.sheep} id = 'sheep' type="checkbox" name="sheep" value="sheep" onChange={changeCheckListener}/>
        <Label for="sheep">Баранина</Label>
      </li>
      <li className='filterCheckBox'>
        
        <Input checked={filterState.bird} id = 'bird' type="checkbox" name="bird" value="bird" onChange={changeCheckListener}/>
        <Label for="bird">Мясо птицы</Label>
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
