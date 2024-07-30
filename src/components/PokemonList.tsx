import { PokemonModel } from "../models/PokemonModel";
import Pokemon from "./Pokemon";

function PokemonList(props: { list?: Array<PokemonModel>; }) {
    const { list } = props;
   
    if (!list) {
        return <>No Pokemon selected</>
    }

    return <>{list.map((pokemon, index) => <>
        <Pokemon pokemon={pokemon} /> 
        {index < list.length - 1 ? <span className="sepatator">VS</span> : null}
        </>
    )}</>
}

export default PokemonList;