import styled from "styled-components";

export const CardContainer = styled.div`
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  border: 1px solid black; // depois apaga ou não rs.
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
  width: 180px;
  height: 35px;
  padding: 10px;
`;