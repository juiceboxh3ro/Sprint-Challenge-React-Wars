import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import { DeckContainer, ButtonHolder, PageButtons, Header2, PseudoButton } from "./styles"

// This is the parent component

export default function CharacterList() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const pageForward = () => {
    if(page < 9) {
      setPage(page + 1);
    }
  }
  const pageBackward = () => {
    if(page <= 9 && page > 1) {
      setPage(page - 1);
    }
  }
  const pageInitial = () => setPage(1);
  const pageFinal = () => setPage(9);
  
  useEffect(() => {
    fetch(`https://swapi.co/api/people/?page=${page}`)
    .then(response => response.json())
    .then(res => {
      setData(res.results);
    })
    .catch(err => console.log("There was a problem fetching data from the API", err))
  }, [page]);

  if(!data) {
    return (<h3>Loading characters...</h3>)
  }

  return (
    <div>
      <Header2>React Wars<br />Characters: Page {page}</Header2>
      <ButtonHolder className="buttons">
        <PageButtons onClick={pageBackward}>Back</PageButtons>
        <PageButtons onClick={pageForward}>Next</PageButtons>
      </ButtonHolder>
      <ButtonHolder className="buttons">
        <PageButtons onClick={pageInitial}>Start Over</PageButtons>
        <PageButtons onClick={pageFinal}>Jump to End</PageButtons>
      </ButtonHolder>
      <DeckContainer>
        {data.map(item => {
          return <CharacterCard data={item}/>
        })}
      </DeckContainer>
      <ButtonHolder>
        <PseudoButton href="#">Top</PseudoButton>
      </ButtonHolder>
    </div>
  )
}