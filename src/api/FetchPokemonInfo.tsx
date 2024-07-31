import axios from "axios";
import { PokemonModel } from "../models/PokemonModel";
import { MoveModel } from "../models/MoveModel";
import { TypeModel } from "../models/TypeModel";

const fetchPokemonInfo = async (id: number, url?: string) => {
    const response = await axios(url ? url : `https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.data) {
        throw new Error('Network response was not ok.');
    }

    let health = response.data.stats.filter(
        (statItem: { stat: { name: string; }; }) => statItem.stat.name === 'hp'
    )[0].base_stat;

    const movesCount = response.data.moves.length;
    let move;
    if (movesCount > 0) {
        const randomMove = Math.floor(Math.random() * (movesCount - 1));
        const moveResponse = await axios.get(response.data.moves[randomMove].move.url);
        move = new MoveModel(
            moveResponse.data.name
                .split('-')
                .map((part: string ) => part[0].toUpperCase() + part.substring(1) )
                .join(' '),
            moveResponse.data.power
        );
    } else {
        move = new MoveModel('Unknown', 0);
    }    

    const typeName = response.data.types[0].type.name;
    const type = new TypeModel(
        typeName, 
        `https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/${typeName}.svg`
    );

    return new PokemonModel(
        id,
        response.data.name.split('-').join(' '),
        type,
        response.data.sprites?.front_default,
        health,
        move
    );
};

export default fetchPokemonInfo;