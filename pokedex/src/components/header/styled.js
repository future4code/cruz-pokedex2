import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  background: rgb(23,78,179);
  background: radial-gradient(circle, rgba(23,78,179,0.4962359943977591) 0%, rgba(36,164,167,0.7287289915966386) 51%, rgba(36,164,167,1) 99%, rgba(21,26,181,0.4514180672268907) 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
 
  h1{
    position: absolute;
    right: 500px;
    color: white;
    font-size: 40px;
    text-shadow: 0 0 0.2em black;
    }
    button{
      padding: 8px;
      font-weight: bold;
      cursor: pointer;
      color: white;
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
      background-color: #2480a7;
    
    }
    button:hover{
      transform: scale(1.1)
    }
     
`