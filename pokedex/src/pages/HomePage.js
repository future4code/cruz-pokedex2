
import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
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
        buttonTitle={'Ir para a Pokedex'}
        title={'Lista de Pokemons'}
        goTo = {goToPokedex}
      />
             <Content>
        {cardsRendered}
      </Content>
    </Container>

  )
}
export default HomePage;