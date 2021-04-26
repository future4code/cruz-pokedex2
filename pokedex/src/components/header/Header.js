import React from "react";

import { HeaderContainer } from "./styled";

const Header = (props) => {
  return (
    <HeaderContainer>
      <div><button type="button" onClick={props.goTo}>
        {props.buttonTitle}
      </button></div>
      <h1>{props.title}</h1>
      {props.details? (
        <div><button onClick={props.addRemove}>Adicionar/Remover da pokedex</button></div>
      ):(
        <div></div>
      )}
    </HeaderContainer>
  );
};

export default Header;
