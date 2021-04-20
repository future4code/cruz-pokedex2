import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background: #F0FFFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
`

const Header = (props) => {
  return(
    <HeaderContainer>
      <button onClick={props.onClickbutton}>{props.buttonTitle}</button>
      <h1>{props.title}</h1>
      {
        props.details &&
          <button onClick={props.idPokemon}>Adicionar/Remover da pokedex</button>
      }
    </HeaderContainer>
  )
}

export default Header;
