import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import PokeCard from '../components/cards/Cards'
import ContextPokemons from '../contexts/contexts'

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContainerContent = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export default function PokedexPage(){
  const {states} = useContext(ContextPokemons)
  const history = useHistory()

  const goToHome = ()=>{history.push('/')}

  let cardsRendered
  if(states.pokemonsAdded) {
    cardsRendered = states.pokemonsAdded.map((poke, index) => {
      return (
        <PokeCard key={index}
          poke={poke}
          title={'Remover da pokedex'}
        />
      )
    })
  }
  return(
    <Container>
      <Header 
      title={'Pokédex'}
      buttonTitle={'Voltar para lista de pokemons'}
      goTo = {goToHome}
      />
      <ContainerContent>
        {cardsRendered}
      </ContainerContent>
    </Container>
  )
}