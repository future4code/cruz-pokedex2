import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import PokeCard from "../../components/cards/Cards";
import Header from "../../components/header/Header";
import ContextPokemons from "../../contexts/contexts";
import { Container, Content } from "./styled";

const HomePage  = () => {
  const history = useHistory()
  const { states} = useContext(ContextPokemons)

  const goToPokedex = ()=>{history.push('/pokedex')}

  let cardsRendered
  if(states.pokemons) {
    cardsRendered = states.pokemons.map((poke, index) => {
      return (
        <PokeCard key={index}
          poke={poke}
          
          title={'Adicionar à pokedex'}
          home={true}
        />
      )
    })
  }

  return(
    <Container>
      <Header
        buttonTitle={'Ir para a Pokédex'}
        title={'Lista de Pokémons'}
        goTo = {goToPokedex}
      />
      <Content>
        {cardsRendered}
      </Content>
    </Container>

  )
}
export default HomePage;
