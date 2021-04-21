import React, {useEffect, useState, useContext} from 'react';
import PokeCard from '../components/cards/Cards';
import Header from '../components/Header';
import {useGetApi} from '../hooks/useRequest'
import styled from 'styled-components'
import ContextPokemonsAdded from '../contexts/contexts'

const Teste = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
`

const HomePage  = () => {
  const pokemons = useContext(ContextPokemonsAdded)
  const cardsRendered = pokemons.map((poke)=>{
    return(
      <PokeCard
        name={poke.name}
        image={poke.imageFront}
        title={'Adicionar a pokedex'}
      />
    )
  })

  return(
    <div>
      <Header/>
      <Teste>
        {cardsRendered}
      </Teste>
    </div>
  )
}
export default HomePage;