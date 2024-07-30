import axios from "axios";
import fetchPokemonInfo from "./FetchPokemonInfo";

const fetchPokemons = async (countNeeded?: number) => {
    const countResponse = await axios('https://pokeapi.co/api/v2/pokemon/?limit=-1');
    if (!countResponse.data) {
        throw new Error('Network response was not ok.');
    }

    countNeeded = countNeeded ? countNeeded : 2;
    const list = countResponse.data.results;
    const count = countResponse.data.count;

    let randomIds = [];
    for (let i = 0; i < countNeeded; i++) {
        randomIds.push(Math.floor(Math.random() * (count - 1)));
    }

    return Promise.all(randomIds.map((id) => fetchPokemonInfo(id, list[id].url)));
};

export default fetchPokemons;