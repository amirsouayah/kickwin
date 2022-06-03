import React from 'react';
import Itemtab from './Itemtab';
import HeaderOrga from "components/Headers/HeaderOrga.js";



const List = (props) => {
 
  let  numbers=[
        {name:"TeamName", captain:"Captain", player:"100"},
        {name:"TeamName", captain:"Captain", player:"100"}

    ]
  return (
    <div className="main-form">
      <HeaderOrga/>
    {
        numbers.map((element) =>{
            return(
              
                <Itemtab item={element}/>
            )
        
        }
      )
    
    }
    </div>
  );
};

export default List;