import React from 'react'
import styled from 'styled-components';
import Header from '../components/cards/Header'

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display:flex;
  flex-direction: column;
`

const ContainerContent = styled.div`
  width: 90%;
  height: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`

const DivImage = styled.div`
  width: 24%;
  height: 500px;
  display: flex;
  flex-direction:column;
  >img{
    width: 100%;
    height: 50%;
    margin: 0;
  }
`

const Stats = styled(DivImage)`
  align-items: center;
  justify-content: space-between;
`

const DivTypeAndMoves = styled(DivImage)`
  width: 48%;
`

export default function DetailsPage(){
  return(
    <Container>
      <Header />
      <ContainerContent>
        <DivImage>
          {/* aqui imagem frontal e de costas */}
        </DivImage>
        <Stats>
          {/* aqui Stats */}
        </Stats>
        <DivTypeAndMoves>
          {/* aqui vai type e moves */}
        </DivTypeAndMoves>
      </ContainerContent>
    </Container>
  )
}
