import styled from "styled-components";

export const CardContainer = styled.div`
  width: 250px;
  height: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  background: rgb(23, 78, 179);
  background: radial-gradient(
    circle,
    rgba(23, 78, 179, 0.4962359943977591) 0%,
    rgba(36, 164, 167, 0.7287289915966386) 51%,
    rgba(36, 164, 167, 1) 99%,
    rgba(21, 26, 181, 0.4514180672268907) 100%
  );
  p {
    font-weight: bold;
    color: white;
    text-transform: uppercase;
  }
  box-shadow: ${props=>props.selected? ('5px 5px 10px black') : ('none')};
  border: ${props=>props.selected?('3px solid red'):('3px solid #061740')};
`;

export const PokeImgs = styled.img`
  width: 100%;
  height: 200px;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  button {
    cursor: pointer;
    padding: 5px;
    font-weight: bold;
    color: white;
    background-color: #2480a7;
    border: 1px solid green;
    width: 49%;
    height: 100%;
    box-sizing: border-box;
    margin: 5px;
  }
  a {
    margin: 5px;
    box-sizing: border-box;
    width: 49%;
    height: 100%;
    padding: 5px;
    text-decoration: none;
    color: white;
    background-color: #2480a7;
    font-weight: 500;
    border: 1px solid green;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
