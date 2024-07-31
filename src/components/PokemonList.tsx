import React from "react";
import { PokemonModel } from "../models/PokemonModel";
import Pokemon from "./Pokemon";

function PokemonList({list}: { list?: Array<PokemonModel>; }) {
    if (!list) {
        return <>No Pokemon selected</>
    }

    return  <>
        { list.map((pokemon, index) => 
            <React.Fragment key={pokemon.id}>
                <Pokemon pokemon={pokemon} />
                { index < list.length - 1 ? <span className="sepatator">VS</span> : null} 
            </React.Fragment>
        ) }
    </>
}

export default PokemonList;