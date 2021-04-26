import React,{useContext, useEffect, useState} from 'react'
import ContextPokemons from "../../contexts/contexts";
import Header from "../../components/header/Header";
import styled from 'styled-components'
import PokeCard from "../../components/cards/Cards";
import {useHistory} from 'react-router-dom'
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;  
`
const DivPokes = styled.div`
  display: flex;
  margin-top:100px;
`
const Vencedor = styled.h1`
  
`

export default function BattlePage(){
  const {states} = useContext(ContextPokemons)
  const history = useHistory()
  let poke1 = {}
  let poke2 = {}

  if(states.battle.length===2){
    const {battle} = states
    poke1 = battle[0]
    poke2 = battle[1]
  }else{
    history.push('/')
  }

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
      return <Vencedor>{poke1.name.toUpperCase()} é vencedor</Vencedor>
    }
    else if(poke1Soma<poke2Soma){
      return <Vencedor>{poke2.name.toUpperCase()} é vencedor</Vencedor>
    }
    else{
      return <Vencedor>Empate</Vencedor>
    }
  }

  return(
    <Container>
      { poke1.name && poke2.name && <>
        <Header
          title={`${poke1.name.toUpperCase()} vs ${poke2.name.toUpperCase()}`}
          goTo={() => history.goBack()}
          buttonTitle={"Voltar"}
        />
        <DivPokes>
        <PokeCard key={1} poke={poke1} battle/>
        <PokeCard key={2} poke={poke2} battle/>
        </DivPokes>
        {vencedor()}
      </>
      }
    </Container>
  )
}