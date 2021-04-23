import React, { useContext } from "react";
import ContextPokemons from "../../contexts/contexts";
import { useHistory } from "react-router-dom";
import Header from "../../components/header/Header";

import {
  Container,
  ContainerContent,
  DivImage,
  Stats,
  DivTypesAndMoves,
  Types,
  Moves,
} from "./styled";

export default function DetailsPage() {
  const history = useHistory();
  const { states, functions } = useContext(ContextPokemons);
  const { pokemonDetails } = states;
  const { addPoke, removePoke } = functions;

  const typesRendered = pokemonDetails.types.map((type) => {
    return <p>{type}</p>;
  });

  const movesRendered = pokemonDetails.moves[0].map((move) => {
    return <p>{move}</p>;
  });

  const addRemove = () => {
    if (
      states.pokemonsAdded.findIndex(
        (poke) => poke.name === pokemonDetails.name
      ) >= 0
    ) {
      removePoke(pokemonDetails);
    } else addPoke(pokemonDetails);
  };

  let allRendered = <div>Carregando</div>;
  if (pokemonDetails.name) {
    allRendered = (
      <ContainerContent>
        <DivImage>
          <img src={pokemonDetails.imageFront} alt={"Imagem frontal"} />
          <img src={pokemonDetails.imageBack} alt={"Imagem posterior"} />
        </DivImage>
        <Stats>
          <h2>Poderes</h2>
          <p>
            <b>HP: </b>
            {pokemonDetails.hp}
          </p>
          <p>
            <b>ATTACK: </b>
            {pokemonDetails.attack}
          </p>
          <p>
            <b>DEFENSE: </b>
            {pokemonDetails.defense}
          </p>
          <p>
            <b>SPECIAL-ATTACK: </b>
            {pokemonDetails.specialAttack}
          </p>
          <p>
            <b>SPECIAL-DEFENSE: </b>
            {pokemonDetails.specialDefense}
          </p>
          <p>
            <b>SPEED: </b>
            {pokemonDetails.speed}
          </p>
        </Stats>
        <DivTypesAndMoves>
          <Types>{typesRendered}</Types>
          <h2>Movimentos</h2>
          <Moves>{movesRendered}</Moves>
        </DivTypesAndMoves>
      </ContainerContent>
    );
  }

  return (
    <Container>
      <Header
        title={pokemonDetails.name}
        details={true}
        goTo={() => history.goBack()}
        buttonTitle={"Voltar"}
        addRemove={addRemove}
      />
      {allRendered}
    </Container>
  );
}
