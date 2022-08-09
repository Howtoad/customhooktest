import { useEffect } from "react";
import { useState } from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState({});
  useEffect(function () {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  });
  return (
    <div>
      <h1>Pokemon</h1>
    </div>
  );
};

export default Pokemon;
