function Pokemon(props) {  
    const { pokemon } = props;
          
    return <div className="pokemon" key={pokemon.id}>
            <div className="wrapper">
                <div className="title">{
                    pokemon 
                    ? <>
                        <span className="name">{pokemon.name}</span>
                        <span className="hp">HP{pokemon.health}</span>
                        </>
                    : null
                }</div>
                <div className="image">{
                    pokemon 
                    ? <img src={pokemon.image} alt={pokemon.name} /> 
                    : <div className="loader"></div>
                }</div>
                <div className="move">{
                    pokemon && pokemon.move.name
                    ? <>
                        <span className="title">Attack </span>
                        <span className="name">{pokemon.move.name}:</span> 
                        <span className="power">{pokemon.move.power}</span>
                    </>
                    : null
                }</div>
            </div>        
        </div>
}

export default Pokemon;