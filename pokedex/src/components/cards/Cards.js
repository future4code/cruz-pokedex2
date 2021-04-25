import React, { useContext, useState } from "react";
import ContextPokemons from "../../contexts/contexts";
import { Link, useHistory} from "react-router-dom";
import { CardContainer, PokeImgs, ButtonContainer } from "./styled";

const PokeCard = (props) => {
  const { functions, setters, states} = useContext(ContextPokemons);
  const [selected, setSelected] = useState(false);
  const history = useHistory()

  const onClickContainer = ()=>{
    const newBattle = [...states.battle]
    if(newBattle.length===2){
      if(newBattle[0].name === props.poke.name){
        setSelected(false)
        newBattle.splice(0,1)
        setters.setBattle(newBattle)
      }
      else if(newBattle[1].name === props.poke.name){
        setSelected(false)
        newBattle.splice(1,1)
        setters.setBattle(newBattle)
      }
    }
    else if(newBattle.length===0){
      setSelected(true)
      newBattle.push(props.poke)
      setters.setBattle(newBattle)
    }
    else{
      if(newBattle[0].name === props.poke.name){
        setSelected(false)
        setters.setBattle([])
      }
      else{
        setSelected(true)
        newBattle.push(props.poke)
        setters.setBattle(newBattle)
        history.push('/battle')
      }
    }
  }

  return (
    <CardContainer selected={selected} onClick={onClickContainer}>
      <PokeImgs alt={props.poke.name} src={props.poke.imageFront} />
      <p>{props.poke.name}</p>
      <ButtonContainer>
        {props.home ? (
          <button onClick={() => functions.addPoke(props.poke)}>
            {props.title}
          </button>
        ) : (
          <button onClick={() => functions.removePoke(props.poke)}>
            {props.title}
          </button>
        )}

        <Link
          onClick={() => {
            setters.setPokemonDetails(props.poke);
          }}
          to={"/details"}
        >
          Ver Detalhes
        </Link>
      </ButtonContainer>
    </CardContainer>
  );
};
export default PokeCard;
