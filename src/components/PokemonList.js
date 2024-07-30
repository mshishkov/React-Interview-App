import Pokemon from "./Pokemon";

function PokemonList(props) {
    const { list } = props;
   
    return list.map(
            (pokemon, index) => <>
                <Pokemon pokemon={pokemon} /> 
                {index < list.length - 1 ? <span className="sepatator">VS</span> : null}
            </>
        )
}

export default PokemonList;