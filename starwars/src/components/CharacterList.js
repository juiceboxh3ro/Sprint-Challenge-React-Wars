import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import { DeckContainer, ButtonHolder, PageButtons, Header2 } from "./styles"

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
    if(page < 1) {
      setPage(page - 1);
    }
  }
  const pageInitial = () => setPage(1);
  const pageFinal = () => setPage(9);
  
  useEffect(() => {
    fetch(`https://swapi.co/api/people/?page=${page}`)
    .then(response => response.json())
    .then(res => {
      console.log(res);
      setData(res.results);
    })
    .catch(err => console.log("There was a problem fetching data from the API", err))
  }, [page]);

  if(!data) {
    return (<h3>Loading characters...</h3>)
  }

  return (
    <div>
      <Header2>Star Wars Characters Page {page}</Header2>
      <ButtonHolder class="buttons">
        <PageButtons onClick={pageBackward}>Back</PageButtons>
        <PageButtons onClick={pageForward}>Next</PageButtons>
      </ButtonHolder>
      <ButtonHolder class="buttons">
        <PageButtons onClick={pageInitial}>Start Over</PageButtons>
        <PageButtons onClick={pageFinal}>Jump to End</PageButtons>
      </ButtonHolder>
      <DeckContainer>
        {data.map(item => {
          return <CharacterCard data={item}/>
        })}
      </DeckContainer>
    </div>
  )
}