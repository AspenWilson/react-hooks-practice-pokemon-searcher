import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({allPokemon, onSetPokemon}) {

  const pokemonList = allPokemon.map((pokemon) => {
    return <PokemonCard key= {pokemon.id} pokemon={pokemon} />
  })
  return (
    <Card.Group itemsPerRow={6}>
      {pokemonList}
    </Card.Group>
  );
}

export default PokemonCollection;
