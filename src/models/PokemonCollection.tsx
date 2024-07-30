import { PokemonModel } from "./PokemonModel";

export class PokemonCollection {
    list?: Array<PokemonModel>;

    constructor(list?: Array<PokemonModel>) {
        this.list = list;
    }

    add(pokemon?: PokemonModel) {
        if (!this.list) {
            this.list = new Array;
        }

        if (pokemon) {
            this.list.push(pokemon);
        }
    }
}