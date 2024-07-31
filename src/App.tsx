import { Component } from 'react';
import './App.css';
import { PokemonCollection } from './models/PokemonCollection';
import PokemonList from './components/PokemonList';
import fetchPokemons from './api/FetchPokemons';
import BattleLog from './components/BattleLog';

interface AppState {
  isLoading?: boolean;
  error?: string;
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

  fetchData = () => {
    this.setState({
      isLoading: true
    });

    fetchPokemons()
      .then((pokemons) => {
        this.setState({
          fighters: new PokemonCollection(pokemons),
          isLoading: false,
          battaleLog: null
        }); 
    })
    .catch((error) => {
      this.setState({
        isLoading: false,
        error: error.message
      });
    });
  }

  simulateBattle = () => {
    const { fighters } = this.state;
    let simulation = [];

    if (!fighters?.list) {
      simulation.push('No pokemons for the fight');

      this.setState({
        battaleLog: simulation
      });

      return;
    }

    let figtersNames =fighters.list.map(pokemon => pokemon.name[0].toUpperCase() + pokemon.name.substring(1));
    simulation.push(figtersNames.join(' and ') + ' joined the battle.');

    let sorted = Object.assign(new Array, fighters.list);

    sorted.map(pokemon => {
      pokemon.name = pokemon.name.split(' ').map((part: string) =>  part[0].toUpperCase() + part.substring(1)).join(' ');
      simulation.push(`Attack: <${pokemon.name}> dealed <${pokemon.move?.power}> damage, having <${pokemon.health}> of health`);
    });

    sorted.sort((a, b) => {
      return a.move && b.move ? (
        b.move.power > a.move.power ? 1 : (b.move.power < a.move.power ? -1 : (
          b.health && a.health ? (b.health > a.health ? 1 : (b.health < a.health ? -1 : 0)) : 0
        ))
      ) : 0;
    });

    let hardestHitter = sorted ? sorted[0] : null;
    let weakestHitter = sorted ? sorted[sorted.length - 1] : null;

    if (hardestHitter.move.power === weakestHitter.move.power && hardestHitter.health === weakestHitter.health) {
      simulation.push(`Draw game!`);
    } else {
      simulation.push(`<${hardestHitter?.name}> lands a decisive blow with <${hardestHitter?.move.name}> knocking out <${weakestHitter?.name}>!`);
    }    

    this.setState({
      battaleLog: simulation
    });
  }

  render() {
    const {isLoading, error, fighters, battaleLog } = this.state;

    return <div className='app-wrapper'>
              <div className='header'>Pokemons Battle Simulator</div>
              <div className='arena'>{
                  isLoading 
                  ? <div className='loader'></div>
                  : (error ? error : <PokemonList list={ fighters?.list } />) 
              }</div>
              { !isLoading ? (<>
                    {battaleLog 
                    ? (<>
                        <BattleLog list={battaleLog} />
                      </>) 
                    : <div className='button' onClick={ this.simulateBattle }>Start Battle</div>
                    }
                    <div className='button button-default' onClick={ this.fetchData }>Generate new opponents</div>
                </>
              ) : null }
          </div>
  }
}

export default App;