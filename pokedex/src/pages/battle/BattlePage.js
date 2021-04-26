import React,{useContext, useEffect} from 'react'
import ContextPokemons from "../../contexts/contexts";
import Header from "../../components/header/Header";
import styled from 'styled-components'
import PokeCard from "../../components/cards/Cards";
import {useHistory} from 'react-router-dom'
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`

export default function BattlePage(){
  const {states} = useContext(ContextPokemons)
  const history = useHistory()
  const {battle} = states
  const [poke1,poke2] = battle

  const valor=(poke,name)=>{
    return Number(poke[name])
  }

  const soma=(poke)=>{
    const elementos=['hp','attack','defense','specialAttack','specialDefense','speed']
    let sum=0
    for(let elem of elementos){
      sum+=valor(poke, elem)
    }
    return sum
  }

  const vencedor=()=>{
    const poke1Soma = soma(poke1)
    const poke2Soma = soma(poke2)
    if(poke1Soma>poke2Soma){
      return <div>Poke1 vencedor</div>
    }
    else if(poke1Soma<poke2Soma){
      return <div>Poke2 vencedor</div>
    }
    else{
      return <div>Empate</div>
    }
  }

  return(
    <Container>
      <PokeCard key={1} poke={poke1} title={"Adicionar na pokedex"} />
      <PokeCard key={2} poke={poke2} title={"Adicionar na pokedex"} />
      {vencedor()}
    </Container>
  )
}