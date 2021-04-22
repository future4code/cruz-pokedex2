import React, {useContext} from 'react'
import ContextPokemons from '../../contexts/contexts'

import { CardContainer, PokeImgs, ButtonContainer } from "./styled";

const PokeCard = (props) => {
  const {functions} = useContext(ContextPokemons)

  return (
    <CardContainer>
      <PokeImgs alt={props.poke.name} src={props.poke.imageFront} />
      <p>{props.poke.name}</p>
      <ButtonContainer>
        {props.home ? (
          <button onClick={()=>functions.addPoke(props.poke)}>{props.title}</button>
        ):(
          <button onClick={()=>functions.removePoke(props.poke)}>{props.title}</button>
        )
        }

        <button>Ver Detalhes</button>
      </ButtonContainer>
    </CardContainer>
  );
};
export default PokeCard;