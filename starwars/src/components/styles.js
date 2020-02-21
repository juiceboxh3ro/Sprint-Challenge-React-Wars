import styled from "styled-components";

// to Character Card
export const CardContainer = styled.div`
  box-sizing: border-box;
  background: #dfe6e9;
  width: 45%;
  height: 300px;
  margin: 20px;
  border-radius: 3px;
  box-shadow: 5px -5px #cdd4da;
`;

export const CardName = styled.h2`
  padding: 0 5px 10px;
  margin-bottom: 50px;
  border-bottom: 2px solid #2d3436;
`;

// to Character List
export const DeckContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ButtonHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 15px 0;
`;

export const PageButtons = styled.button`
  width: 150px;
  height: 30px;
  border: none;
  background: #dfe6e9;
  border-radius: 3px;
`;

export const Header2 = styled.h2`
  margin: 50px auto;
`;