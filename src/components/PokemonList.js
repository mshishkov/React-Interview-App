import { Component } from "react";
import Pokemon from "./Pokemon";

class PokemonList extends Component({ list }) {    
    render() {
        return <>
            {list.map((pokemon, index) => <>
                <Pokemon pokemon={pokemon} /> 
                {index !== this.props.list?.length - 1 
                ? <span className="sepatator">VS</span> 
                : ''}
            </>)}
        </>
    }   
}

export default PokemonList;