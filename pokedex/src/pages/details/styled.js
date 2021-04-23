import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #b3d3e0;
  align-items: center;
`;

export const ContainerContent = styled.div`
  width: 90%;
  height: 500px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
`;

export const DivImage = styled.div`
 width: 24%;
  height: 100%;
  display: flex;
  flex-direction:column;
  align-items: center;
  >img{
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Stats = styled(DivImage)`
   box-sizing: border-box;
  padding: 0 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  >h2{
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
  >p{
    box-sizing: border-box;
    padding: 0 5px;
  }
`

export const Moves = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  >h2{
    align-self: center;
  }
`
