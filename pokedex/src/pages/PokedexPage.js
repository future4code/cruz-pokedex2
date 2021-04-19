import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Cards from '../components/cards/Cards'

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
  return(
    <Container>
      <Header />
      <ContainerContent>
        {/* aqui vai a lista de Cards */}
      </ContainerContent>
    </Container>
  )
}