import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #b3d3e0;
  h1 {
    left: 600px;
  }
  @media (max-width: 600px) {
    h1 {
      left: 250px;
      font-size: 24px;
    }
  }
`;

export const ContainerContent = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 80px;
  a {
    padding: 0;
    text-align: center;
  }
`;
