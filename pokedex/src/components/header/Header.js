import React from "react";

import { HeaderContainer } from "./styled";

const Header = (props) => {
  console.log('header', props.buttonTitle)
  return(
    <HeaderContainer>
      <button type='button' onClick={props.goTo}>{props.buttonTitle}</button>
      <h1>{props.title}</h1>
      {
        props.details &&
          <button onClick={props.addRemove}>Adicionar/Remover da pokedex</button>
      }
    </HeaderContainer>
  )
}

export default Header;
