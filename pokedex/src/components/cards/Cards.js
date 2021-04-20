import React from 'react'
import { CardContainer, PokeImgs, ButtonContainer } from "./styled";

const PokeCard = (props) => {
  return (
    <CardContainer>
      <PokeImgs alt={props.name} src={props.image} />
      <p>{props.poke}</p>
      <ButtonContainer>
        <button>{props.title}</button>
        <button>Ver Detalhes</button>
      </ButtonContainer>
    </CardContainer>
  );
};
export default PokeCard;