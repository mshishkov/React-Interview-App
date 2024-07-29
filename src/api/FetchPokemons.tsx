import axios from "axios";
import { PokemonModel } from "../models/PokemonModel";
import { PokemonCollection } from "../models/PokemonCollection";

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

const fetchPokemons = async () => {
    const response = await axios(baseUrl + '?limit=-1');

    if (!response.data) {
        throw new Error('Network response was not ok.');
    }

    return new PokemonCollection(response.data.results.map((pokemon: {
        name: string;
        url: string;
    }) => {
        let id = parseInt(pokemon.url.replace(baseUrl, '').replace('/', ''));
        let name = pokemon?.name.split('-').join(' ');
        
        return new PokemonModel(id, name);
    }));
};

export default fetchPokemons;