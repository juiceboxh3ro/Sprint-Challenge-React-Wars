import React from "react";
import { CardContainer, CardName, MinorInfo } from "./styles"

// This is the child component

const CharacterCard = (props) => {

  if(!props) {
    return (
      <h3>Loading cards...</h3>
    )
  }
  
  return (
    <CardContainer id="card-container">
      <CardName id="card-name">{props.data.name}</CardName>
      <MinorInfo className="minor-info">
        <p>Born: {props.data.birth_year}</p>
        <p>Gender: {props.data.gender}</p>
        <p>Hair color: {props.data.hair_color}</p>
        <p>Skin color: {props.data.skin_color}</p>
        <p>{props.data.height} cm</p>
        <p>{props.data.mass} kg</p>
      </MinorInfo>
    </CardContainer>
  )
}


export default CharacterCard;