import React from "react";
import Button from"./button";

 const Header = (props) => {
     const onClick=()=>{
        console.log("Clicked");
     }
  return (
    <header className="header">
        <h1>{props.title}</h1>
        <Button onClick={onClick}></Button>
    </header>
  );
  
};

Header.defaultProps={
    title:"Task tracker "
}
export default Header;