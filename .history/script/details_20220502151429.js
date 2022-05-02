const queryString = document.location.search;

const params = new URLSearchParams(queryString);
console.log(params);
console.log(params.get("name")); // get me the value of the search query param
const pokemonName = params.get("name");
// MY END POINT
const APIUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;