import fetchPokemonInfo from "../api/FetchPokemonInfo";
import { PokemonModel } from "./PokemonModel";

export class PokemonCollection {
    list?: Array<PokemonModel>;

    constructor(list?: Array<PokemonModel>) {
        this.list = list;
    }

    add(pokemon?: PokemonModel) {
        if (!this.list) {
            this.list = [];
        }

        if (pokemon) {
            this.list.push(pokemon);
        }
    }

    updateInfo = async (pokemon: PokemonModel) => {
        await fetchPokemonInfo(pokemon.id)
            .then(info => {
                pokemon = new PokemonModel(
                    info.id,
                    info.name.split('-').join(' '),
                    info.image,
                    info.health,
                    info.move 
                )
            });

        return pokemon;
    }

    get total () {
        return this.list ? this.list.length : 0;
    }

    get randomPokemon() {
        if (!this.list) {
            return;
        }

        let i = Math.floor(Math.random() * this.total);
        let pokemonId = this.list[i].id;

        let randomPokemon = this.list[i];

        return randomPokemon;
    }
}