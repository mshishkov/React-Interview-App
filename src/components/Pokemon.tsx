import { PokemonModel } from "../models/PokemonModel";

function Pokemon({ pokemon, showVS }: { pokemon?: PokemonModel; showVS?: boolean}) {  
    if (!pokemon) {
        return <></>
    }

    return <div className={pokemon.type.name + ' pokemon'} key={pokemon.id} >
            <div className="wrapper">
                <div className="title">
                    <span className="name">{pokemon.name}</span>
                    <span className="hp">
                        <small>HP</small>
                        <span className="health">{pokemon.health}</span>
                        <img src={pokemon.type.image} alt={pokemon.type.name} />
                    </span>
                </div>
                <div className="image">{
                    pokemon.image
                    ? <>
                        <img src={pokemon.image} alt={pokemon.name} />
                      </> 
                    : <div className="loader"></div>
                }</div>
                <div className="move">{
                    pokemon && pokemon.move
                    ? <>
                        <span className="title">Attack </span>
                        <span className="name">{pokemon.move.name}:</span> 
                        <span className="power">{pokemon.move.power ? pokemon.move.power : 'not set' }</span>
                    </>
                    : null
                }</div>
            </div>        
        </div>
}

export default Pokemon;