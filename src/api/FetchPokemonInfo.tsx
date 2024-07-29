import axios from "axios";
import { PokemonModel } from "../models/PokemonModel";
import { MoveModel } from "../models/MoveModel";

const fetchPokemonInfo = async (id: number) => {
    const response = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.data) {
        throw new Error('Network response was not ok.');
    }

    let health = response.data.stats.filter(
        (statItem: { stat: { name: string; }; }) => statItem.stat.name === 'hp'
    )[0].base_stat;

    let strongestMove = new MoveModel('', 0);

    for(let i in response.data.moves) {
        let move = await axios.get(response.data.moves[i].move.url);

        if (strongestMove.power < move.data.power) {
            strongestMove.power = move.data.power;
            strongestMove.name = move.data.name.split('-').join(' ');
        }
    }
    
    return new PokemonModel(
        id,
        response.data.name,
        response.data.sprites?.front_default,
        health,
        strongestMove
    );
};

export default fetchPokemonInfo;