import React, { Component } from "react";
import fetchPokemonInfo from "../api/FetchPokemonInfo";
import { PokemonModel } from "../models/PokemonModel";

class Pokemon extends Component {    
    constructor(props) {
        super(props);

        this.state = {
            pokemon: null
        }
    }
    
    componentDidMount() {
        fetchPokemonInfo(this.props.pokemon?.id)
            .then(info => {
                this.setState({
                    pokemon: new PokemonModel(
                        info.id,
                        info.name.split('-').join(' '),
                        info.image,
                        info.health,
                        info.move 
                    )
                })
            });
    }
    
    
    render() {
        const pokemon = this.state.pokemon;

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