import { Component } from "react";

class Pokemon extends Component {    
    constructor(props) {
        super(props);

        this.state = {
            pokemon: props.pokemon
        }
    }
    
    render() {
        const {pokemon} = this.state;

        return <>
            <div className="pokemon" key={pokemon?.id}>{
                <div className="wrapper">
                    <div className="title">{
                        pokemon ? 
                            <>
                                <span>{pokemon?.name}</span>
                                <span className="hp">{pokemon?.health}</span>
                            </>
                        : ''
                    }</div>
                    <div className="image">{
                        pokemon 
                        ? <><img src={pokemon?.image} alt={pokemon?.name} /></> 
                        : <div className="loader"></div>
                        
                    }</div>
                    <div className="move">{
                        pokemon 
                        ? <>
                            Strongest Move <br />
                            <span>{pokemon?.move.name}</span>: 
                            <span className="power">{pokemon?.move.power}</span>
                        </>
                        : ''
                    }</div>
                </div>        
            }</div>
        </>
    }   
}

export default Pokemon;