import styled from "styled-components";

export const CardContainer = styled.div`
  width: 250px;
  height: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  border: 3px solid #061746; // depois apaga ou não rs.
  border-radius: 10px;
  p{
    font-weight: bold;
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
  }
`;