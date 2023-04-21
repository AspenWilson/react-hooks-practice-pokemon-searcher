import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [allPokemon, setAllPokemon] = useState([])
  const [searchKey, setSearchKey] = useState([''])

  useEffect (() => {
    fetch('http://localhost:3001/pokemon')
    .then(resp => resp.json())
    .then(allPokemon => setAllPokemon(allPokemon))
  }, [])

  function handleNewPokemon (newPokemon) {
    setAllPokemon([...allPokemon, newPokemon])
  }

  const searchedPokemon = allPokemon.filter((pokemon) => pokemon.name.includes(searchKey))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleNewPokemon}/>
      <br />
      <Search setSearchKey={setSearchKey}/>
      <br />
      <PokemonCollection allPokemon={searchedPokemon} onSetPokemon={setAllPokemon}/>
    </Container>
  );
}

export default PokemonPage;
