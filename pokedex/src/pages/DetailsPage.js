import styled from 'styled-components';
import Header from '../components/Header'
import React, {useContext} from 'react'
import ContextPokemons from '../contexts/contexts'
import {useHistory} from 'react-router-dom'

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
`

const ContainerContent = styled.div`
  width: 90%;
  height: 500px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
`

const DivImage = styled.div`
  width: 24%;
  height: 100%;
  display: flex;
  flex-direction:column;
  align-items: center;
  >img{
    max-width: 100%;
    max-height: 100%;
  }
  border: 1px solid black;
`

const Stats = styled(DivImage)`
  box-sizing: border-box;
  padding: 0 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  >h2{
    align-self: center;
  }
  border: 1px solid black;
`

const DivTypesAndMoves = styled(DivImage)`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
`

const Types = styled.div`
  width: 100%;
  height: 100px;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  >p{
    box-sizing: border-box;
    padding: 0 5px;
  }
`

const Moves = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  >h2{
    align-self: center;
  }
`

export default function DetailsPage(){
  const history = useHistory();
  const {states} = useContext(ContextPokemons)
  const {pokemonDetails} = states

  const typesRendered = pokemonDetails.types.map((type)=>{
    return(
      <p>{type}</p>
    )
  })


  const movesRendered = pokemonDetails.moves[0].map(move=>{
    return(
      <p>{move}</p>
    )
  })

  let allRendered = <div>Carregando</div>
  if(pokemonDetails.name){
    allRendered = (
      <ContainerContent>
        <DivImage>
          <h1>{pokemonDetails.name}</h1>
          <img src={pokemonDetails.imageFront} alt={'Imagem frontal'} />
          <img src={pokemonDetails.imageBack} alt={'Imagem posterior'} />
        </DivImage>
        <Stats>
          <h2>Poderes</h2>
          <p><b>HP:</b>{pokemonDetails.hp}</p>
          <p><b>ATTACK:</b>{pokemonDetails.attack}</p>
          <p><b>DEFENSE:</b>{pokemonDetails.defense}</p>
          <p><b>SPECIAL-ATTACK:</b>{pokemonDetails.specialAttack}</p>
          <p><b>SPECIAL-DEFENSE:</b>{pokemonDetails.specialDefense}</p>
          <p><b>SPEED:</b>{pokemonDetails.speed}</p>
        </Stats>
        <DivTypesAndMoves>
          <Types>
            {typesRendered}
          </Types>
          <h2>Movimentos</h2>
          <Moves>
            {movesRendered}
          </Moves>
        </DivTypesAndMoves>
      </ContainerContent>
    )
  }

  return(
    <Container>
      <Header />
      {allRendered}
    </Container>
  )
}