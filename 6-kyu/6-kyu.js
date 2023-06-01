async function getHeightByPokemonId(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  return fetch(url)
    .then((response) => response.json())
    .then((pokemon) => {
      return pokemon.height;
    });
}

function getPokemonsByType(type) {
  const url = `https://www.pokeapi.co/api/v2/type/${type}`;
  return fetch(url)
    .then((response) => response.json())
    .then((pokemon) => {
      return pokemon;
    });
}

function getPokemonSpeciesNameByGeneration(generation) {
  const url = `https://www.pokeapi.co/api/v2/generation/${generation}`;

  return fetch(url)
    .then((response) => response.json())

    .then((generation) => getPokemonSpeciesNames(generation.pokemon_species));
}

function getPokemonSpeciesNames(pokemonSpecies) {
  const pokemonSpeciesNames = [];

  pokemonSpecies.forEach((pokemon) => {
    pokemonSpeciesNames.push(pokemon.name);
  });

  return pokemonSpeciesNames;
}
module.exports = {
  getHeightByPokemonId,
  getPokemonsByType,
  getPokemonSpeciesNameByGeneration,
};