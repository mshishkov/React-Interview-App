import { MoveModel } from "./MoveModel";

export class PokemonModel {
    id: number;
    name: string;
    image?: string;
    health?: number;
    move?: MoveModel;

    constructor(
        id: number, 
        name: string,
        image?: string,
        health?: number,
        move?: MoveModel
    ) { 
        this.id = id;
        this.name = name;
        this.image = image;
        this.health = health;
        this.move = move;
    }
}