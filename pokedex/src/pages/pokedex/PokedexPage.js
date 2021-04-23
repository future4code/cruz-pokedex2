import React, { useContext } from "react";
import Header from "../../components/header/Header";
import PokeCard from "../../components/cards/Cards";
import ContextPokemons from "../../contexts/contexts";
import { Container, ContainerContent } from "./styled";
import { useHistory } from "react-router-dom";

export default function PokedexPage() {
  const { states } = useContext(ContextPokemons);
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };

  let cardsRendered;
  if (states.pokemonsAdded) {
    cardsRendered = states.pokemonsAdded.map((poke, index) => {
      return <PokeCard key={index} poke={poke} title={"Remover da pokedex"} />;
    });
  }
  return (
    <Container>
      <Header
        title={"Pokédex"}
        buttonTitle={"Voltar para lista de pokémons"}
        goTo={goToHome}
      />
      <ContainerContent>{cardsRendered}</ContainerContent>
    </Container>
  );
}
