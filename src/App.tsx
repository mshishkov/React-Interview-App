import { Component } from 'react';
import './App.css';
import { PokemonCollection } from './models/PokemonCollection';
import PokemonList from './components/PokemonList';
import fetchPokemons from './api/FetchPokemons';
import BattleLog from './components/BattleLog';

interface AppState {
  isLoading?: boolean;
  error?: string;
  collection?: PokemonCollection;
  fighters?: PokemonCollection;
  battaleLog?: [],
}

class App extends Component<AppState> {
  state: AppState = {
    isLoading: true
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    fetchPokemons()
    .then((pokemons) => {
      this.setState({
        collection: pokemons,
        isLoading: false
      });

      let fightersCollection = new PokemonCollection();
      for(let i = 1; i <= 2; i++) {
        pokemons.randomPokemon?.then(pokemon => fightersCollection.add(pokemon))
          .then(() => {           
            this.setState({
              fighters: fightersCollection
            });
          });
      }      
    })
    .catch((error) => {
      this.setState({
        isLoading: false,
        error: error
      });
    });
  }

  simulate = () => {
    const { fighters } = this.state;
    let simulation = [];
  
    if (fighters?.list) {
       let figtersNames =fighters.list.map(pokemon => pokemon.name[0].toUpperCase() + pokemon.name.substring(1));
      simulation.push(figtersNames.join(' and ') + ' joined the battle.');

      let sorted = Object.assign(new Array, fighters.list);

      sorted.map(pokemon => {
        pokemon.name = pokemon.name.split(' ').map((part: string) =>  part[0].toUpperCase() + part.substring(1)).join(' ');
        simulation.push(`Pokemon: ${pokemon.name} deals ${pokemon.move?.power} damage, having ${pokemon.health} of health`);
      });

      sorted.sort((a, b) => {
        return a.move && b.move ? (
          b.move.power > a.move.power ? 1 : (b.move.power < a.move.power ? -1 : (
            b.health && a.health ? (b.health > a.health ? 1 : (b.health < a.health ? -1 : 0)) : 0
          ))
        ) : 0;
      });

      let hardestHitter = sorted ? sorted[0] : null;
      simulation.push(`Hardest hitter: ${hardestHitter?.name}`)
    }

    this.setState({
      battaleLog: simulation
    });
  }

  render() {
    const {isLoading, error, fighters, battaleLog } = this.state;

    return <>{
      isLoading 
      ? ('Updating Pokemons database....')
      :  error 
          ? error
          : (
            <div className='app-wrapper'>
              <div className='header'>Pokemons Battle Simulator</div>
              <div className='arena'>
                <PokemonList list={ fighters?.list } />
              </div>
              <div className='button' onClick={ this.simulate }>Simulate battle</div>
              { battaleLog ? <BattleLog list={battaleLog} /> : null }
            </div>
          )
    }</>
  }
}

export default App;