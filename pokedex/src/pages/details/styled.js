import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #b3d3e0;
`;

export const ContainerContent = styled.div`
  width: 90%;
  height: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
`;

export const DivImage = styled.div`
  width: 24%;
  height: 500px;
  display: flex;
  flex-direction: column;
  > img {
    width: 100%;
    height: 50%;
    margin: 0;
  }
`;

export const Stats = styled(DivImage)`
  align-items: center;
  justify-content: space-between;
`;

export const DivTypeAndMoves = styled(DivImage)`
  width: 48%;
`;
