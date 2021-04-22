
import React, {useContext} from 'react';
import PokeCard from '../components/cards/Cards';
import Header from '../components/Header';
import {useGetApi} from '../hooks/useRequest'
import styled from 'styled-components'
import ContextPokemons from '../contexts/contexts'

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const HomePage  = () => {
  const {pokemons}= useContext(ContextPokemons)

  let cardsRendered
  if(pokemons) {
    cardsRendered = pokemons.map((poke, index) => {
      return (
        <PokeCard key={index}
          poke={poke}
          title={'Adicionar a pokedex'}
          home={true}
        />
      )
    })
  }

  return(
    <Container>
      <Header/>

      <Content>
        {cardsRendered}
      </Content>
    </Container>

  )
}
export default HomePage;