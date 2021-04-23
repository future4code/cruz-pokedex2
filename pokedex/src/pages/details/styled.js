import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #b3d3e0;
  align-items: center;
  div:first-child{
    h1{
      margin-right: 150px;
    }
  }
  @media (max-width: 600px) {
    div:first-child{
    h1{
      right: 100px;
      font-size: 20px;
    }
    
  }
  }
`;

export const ContainerContent = styled.div`
  width: 90%;
  height: 500px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  img{
    margin-top: 90px;
  }
  @media (max-width: 600px) {
    margin-top: 120px;
  }
`;

export const DivImage = styled.div`
  width: 24%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    max-width: 100%;
    max-height: 100%;
    width: 150px;
    height: 150px;
  }
`;

export const Stats = styled(DivImage)`
  box-sizing: border-box;
  padding: 0 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-around;
  > h2 {
    align-self: center;
  }
`;

export const DivTypesAndMoves = styled(DivImage)`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Types = styled.div`
  width: 100%;
  height: 100px;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
  > p {
    box-sizing: border-box;
    padding: 0 5px;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 5px; 
  }
  @media (max-width: 600px) {
    border-bottom: 1px solid white;
  }
`;

export const Moves = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  > h2 {
    align-self: center;
  }
`;
