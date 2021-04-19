import React from "react ";
import { CardContainer, PokeImgs, ButtonContainer } from "./styled";

const PokeCard = (props) => {
  return (
    <CardContainer>
      <PokeImgs alt={props.poke.name} src={props.poke.sprites.front_default} />
      {/* na API a foto do pokemon, de frente, está dentro de Sprites{front_default} */}
      <ButtonContainer>
        <button>Adicionar a Pokédex </button>
        <button>Ver Detalhes</button>
      </ButtonContainer>
    </CardContainer>
  );
};
export default PokeCard;