import React from "react";
import Pokemon from "./Pokemon";

class PokemonList extends React.Component {    
    render() {
        return <>
            {this.props.list?.map((pokemon, index) => <>
                <Pokemon 
                    key={index} 
                    pokemon={pokemon}
                /> 
                {index !== this.props.list?.length - 1 
                ? <span className="sepatator">VS</span> 
                : ''}
            </>)}
        </>
    }   
}

export default PokemonList;