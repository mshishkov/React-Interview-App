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

    get total () {
        return this.list ? this.list.length : 0;
    }

    get randomPokemon() {
        if (!this.list) {
            return;
        }

        let i = Math.floor(Math.random() * this.total);
        
        return fetchPokemonInfo(this.list[i].id);
    }
}