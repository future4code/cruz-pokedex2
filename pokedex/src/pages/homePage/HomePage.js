import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import PokeCard from "../../components/cards/Cards";
import Header from "../../components/header/Header";
import { useGetApi } from "../../hooks/useRequest";
import ContextPokemons from "../../contexts/contexts";
import { Container, Content } from "./styled";

const HomePage = () => {
  const history = useHistory();
  const { states } = useContext(ContextPokemons);

  let cardsRendered;
  if (states.pokemons) {
    cardsRendered = states.pokemons.map((poke, index) => {
      return (
        <PokeCard
          key={index}
          poke={poke}
          title={"Adicionar à pokédex"}
          home={true}
        />
      );
    });
  }

  return (
    <Container>
      <Header buttonTitle={"Ir para Pokédex"} title={"Lista de Pokémons"} />
      <Content>{cardsRendered}</Content>
    </Container>
  );
};
export default HomePage;
