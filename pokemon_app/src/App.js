import React, {Component, Fragment} from 'react';
import {Header, Button, Pagination, AppContainer, DataSource} from 'library';
import * as styles from './App.module.scss';
import {PokemonTile} from "./pokemon-tile/pokemon-tile.component";

class App extends Component {
  state = {
    page: 1,
  };

  updatePage = (page) => {
    this.setState({
      page
    });
  };

  onCharacterSelection = (url: string) => {

  };

  render() {
    return (
      <AppContainer className={styles.appBackground}>
        <DataSource url={`https://pokeapi.co/api/v2/pokemon/`}>
          {(data) => {
            return (
              <div className={styles.appData}>
                <div className={styles.pokemons}>
                  {data.results.slice((this.state.page-1)*50, this.state.page*50).map(pokemon => (
                    <PokemonTile
                      key={pokemon.name}
                      {...pokemon}
                      onClick={this.onCharacterSelection}
                    />
                  ))}
                </div>
                <div className={styles.appFooter}>
                  <Pagination
                    pageSize={50}
                    current={this.state.page}
                    total={data.count}
                    onChange={this.updatePage}
                  />
                </div>
              </div>
            )
          }}
        </DataSource>
      </AppContainer>
    );
  }
}

export default App;
