import styled from "styled-components";

export const Container = styled.div`
  width: 99vw;
  display: flex;
  flex-direction: column;
  background-color: #b3d3e0;
  @media (max-width: 600px) {
    h1 {
      right: 50px;
      font-size: 24px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 80px;
`;
