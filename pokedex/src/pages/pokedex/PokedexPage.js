import React, { useContext } from "react";
import Header from "../../components/header/Header";
import PokeCard from "../../components/cards/Cards";
import ContextPokemons from "../../contexts/contexts";
import { Container, ContainerContent } from "./styled";

export default function PokedexPage() {
  const { states } = useContext(ContextPokemons);

  let cardsRendered;
  if (states.pokemonsAdded) {
    cardsRendered = states.pokemonsAdded.map((poke, index) => {
      return <PokeCard key={index} poke={poke} title={"Remover da pokedex"} />;
    });
  }
  return (
    <Container>
      <Header title={"Pokédex"} buttonTitle={"Voltar para lista de pokémons"} />
      <ContainerContent>{cardsRendered}</ContainerContent>
    </Container>
  );
}
