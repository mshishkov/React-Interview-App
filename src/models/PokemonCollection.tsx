import { PokemonModel } from "./PokemonModel";

export class PokemonCollection {
    list?: Array<PokemonModel>;

    constructor(list?: Array<PokemonModel>) {
        this.list = list;
    }
}