import styled from "styled-components";

export const CardContainer = styled.div`
  width: 250px;
  height: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  border: 3px solid #061746; 
  border-radius: 6px;
  background: rgb(23,78,179);
  background: radial-gradient(circle, rgba(23,78,179,0.4962359943977591) 0%, rgba(36,164,167,0.7287289915966386) 51%, rgba(36,164,167,1) 99%, rgba(21,26,181,0.4514180672268907) 100%);
  p{
    font-weight: bold;
    color: white;
    text-transform: uppercase;
  }
`;

export const PokeImgs = styled.img`
  width: 100%;
  height: 200px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 35px;
  padding: 10px;
  button{
    cursor: pointer;
    padding: 5px;
    font-weight: bold;
    color: white;
    background-color: #2480a7;
  }
`;