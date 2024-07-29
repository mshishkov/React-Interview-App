import { Component } from "react";
import Pokemon from "./Pokemon";

class PokemonList extends Component {    
    render() {
        return <>
            {this.props.list?.map((pokemon, index) => <>
                <Pokemon pokemon={pokemon} /> 
                {index !== this.props.list?.length - 1 
                ? <span className="sepatator">VS</span> 
                : ''}
            </>)}
        </>
    }   
}

export default PokemonList;