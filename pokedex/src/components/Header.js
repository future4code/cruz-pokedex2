import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  background: rgb(174,180,238);
  background: radial-gradient(circle, rgba(174,180,238,1) 7%, rgba(218,233,148,1) 81%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  h1{
    color: #061746;
    }
    button{
      padding: 8px;
      font-weight: bold;
      cursor: pointer;
      background-color: white;
    }
    button:hover{
      transform: scale(1.1)
    }
     
`

const Header = (props) => {
  const history = useHistory()
  console.log('header', props.buttonTitle)
  return(
    <HeaderContainer>
      <button onClick={props.goTo}>{props.buttonTitle}</button>
      <h1>{props.title}</h1>
      {
        props.details &&
          <button onClick={props.idPokemon}>Adicionar/Remover da pokedex</button>
      }
    </HeaderContainer>
  )
}

export default Header;
