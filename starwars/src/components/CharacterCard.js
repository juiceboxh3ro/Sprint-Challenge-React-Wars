import React from "react";
import { CardContainer, CardName } from "./styles"

// This is the child component

const CharacterCard = (props) => {

  if(!props.data) {
    return (
      <h3>Loading...</h3>
    )
  }
  
  return (
    <CardContainer id="card-container">
      <CardName id="card-name">{props.data.name}</CardName>
      <div className="minor-info">
        <p>Born: {props.data.birth_year}</p>
        <p>Gender: {props.data.gender}</p>
        <p>Hair color: {props.data.hair_color}</p>
        <p>{props.data.height} cm</p>
        <p>{props.data.mass} kg</p>
      </div>
    </CardContainer>
  )
}


export default CharacterCard;