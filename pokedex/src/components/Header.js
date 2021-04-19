import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  height: 10vh;
  background: #F0FFFF;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
` 
const Header = (props) => {
  return(
    <HeaderContainer>
      <h1>{props.title}</h1>
    </HeaderContainer>
  )
}

export default Header;