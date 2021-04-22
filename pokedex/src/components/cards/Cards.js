import React, {useContext} from 'react'
import ContextPokemons from '../../contexts/contexts'

import { CardContainer, PokeImgs, ButtonContainer } from "./styled";

const PokeCard = (props) => {
  const {addPoke} = useContext(ContextPokemons)
  const {removePoke} = useContext(ContextPokemons)

  return (
    <CardContainer>
      <PokeImgs alt={props.poke.name} src={props.poke.imageFront} />
      <p>{props.poke.name}</p>
      <ButtonContainer>
        {props.home ? (
          <button onClick={()=>addPoke(props.poke)}>{props.title}</button>
        ):(
          <button onClick={()=>removePoke(props.poke)}>{props.title}</button>
        )
        }

        <button>Ver Detalhes</button>
      </ButtonContainer>
    </CardContainer>
  );
};
export default PokeCard;