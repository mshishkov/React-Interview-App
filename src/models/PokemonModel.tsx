import { MoveModel } from "./MoveModel";
import { TypeModel } from "./TypeModel";

export class PokemonModel {
    id: number;
    name: string;
    type: TypeModel;
    image?: string;
    health?: number;
    move?: MoveModel;

    constructor(
        id: number, 
        name: string,
        type: TypeModel,
        image?: string,
        health?: number,
        move?: MoveModel
    ) { 
        this.id = id;
        this.name = name;
        this.type = type;
        this.image = image;
        this.health = health;
        this.move = move;
    }
}