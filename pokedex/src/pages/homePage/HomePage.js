import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PokeCard from "../../components/cards/Cards";
import Header from "../../components/header/Header";
import ContextPokemons from "../../contexts/contexts";
import { Container, Content , DivButtons} from "./styled";

const HomePage = () => {
  const history = useHistory();
  const { states, functions, setters} = useContext(ContextPokemons);
  const [loading, setLoading] = useState(true)

  const goToPokedex = () => {
    history.push("/pokedex");
  };

  const cardsRendered=()=>{
    if(states.pokemons.length===0)return <div>Carregando</div>
    else return states.pokemons.map((poke, index) => {
      return <PokeCard key={index} home poke={poke} title={"Adicionar na pokedex"} />;
    });
  }

  useEffect(()=>{
    setters.setBattle([])
  },[])

  return (
    <Container>
      <Header
        buttonTitle={"Ir para a Pokédex"}
        title={"Lista de Pokémons"}
        goTo={goToPokedex}
      />
      <Content>{cardsRendered()}</Content>
      <DivButtons>
        <button onClick={functions.previousPage}>⬅</button>
        <button onClick={functions.nextPage}>➡</button>
      </DivButtons>
    </Container>
  );
};
export default HomePage;
