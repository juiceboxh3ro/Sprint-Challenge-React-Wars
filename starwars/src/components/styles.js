import styled from "styled-components";

const spacegray = "#dfe6e9";
const grayshadow = "#cdd4da";
const darkgray= "#2d3436"

// to Character Card
export const CardContainer = styled.div`
  box-sizing: border-box;
  background: ${spacegray};
  width: 45%;
  height: 350px;
  margin: 20px;
  border-radius: 3px;
  box-shadow: 5px -5px 15px ${grayshadow};
  font-family: 'Tomorrow', sans-serif;
  font-size: 2rem;
`;

export const CardName = styled.h2`
  padding: 0 5px 10px;
  margin-bottom: 50px;
  border-bottom: 2px solid ${darkgray};
  font-family: 'Trade Winds', sans-serif;
  font-size: 1.4rem;
`;

export const MinorInfo = styled.div`
  font-size: 1rem;
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
  background: ${spacegray};
  border-radius: 3px;
  font-size: 0.8rem;
  font-family: 'Tomorrow', sans-serif;
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    background: ${darkgray};
    color: ${spacegray};
    text-align: left;
    transform: scale(1.05);
  }
`;

export const PseudoButton = styled.a`
  text-decoration: none;
  color: ${darkgray};
  text-align: center;
  width: 150px;
  height: 30px;
  border: none;
  padding-top: 12px;
  padding-left: 6px;
  background: ${spacegray};
  border-radius: 3px;
  font-size: 0.8rem;
  font-family: 'Tomorrow', sans-serif;
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    background: ${darkgray};
    color: ${spacegray};
    text-align: left;
    transform: scale(1.05);
  }
`;

export const Header2 = styled.h2`
  margin: 50px auto;
  font-family: 'Trade Winds', sans-serif;
  font-size: 2.8rem;
  text-shadow: 2px 2px 5px ${spacegray};
`;