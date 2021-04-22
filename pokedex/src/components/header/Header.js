import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { HeaderContainer } from "./styled";

const Header = (props) => {
  const history = useHistory();
  return (
    <HeaderContainer>
      <button onClick={() => history.push("/pokedex")}>
        {props.buttonTitle}
      </button>
      <h1>{props.title}</h1>
      {props.details && (
        <button onClick={props.idPokemon}>Adicionar/Remover da pokedex</button>
      )}
    </HeaderContainer>
  );
};

export default Header;
