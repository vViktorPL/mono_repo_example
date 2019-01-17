// @flow

import React, { Component, Fragment } from 'react';
import { ListWrapper, Tile, Modal, Pagination, AppContainer, DataSource, Header } from '@vviktor/library';
import * as styles from './App.module.scss';
import logo from './pokemon.png';
import { PokemonDetails } from './pokemon-details/pokemon-details.component';

type AppProps = {};
type AppState = {
  page: number,
  selectionUrl: ?string,
};

class App extends Component<AppProps, AppState> {
  state = {
    page: 1,
    selectionUrl: null,
  };

  updatePage = (page: number) => {
    this.setState({
      page,
    });
  };

  onCharacterSelection = (selectionUrl: string) => {
    this.setState({
      selectionUrl,
    });
  };

  onClose = () => {
    this.setState({
      selectionUrl: null,
    });
  };

  render() {
    return (
      <AppContainer className={styles.appBackground}>
        <Header img={logo} />
        <DataSource url={`https://pokeapi.co/api/v2/pokemon/`}>
          {data => {
            return (
              <Fragment>
                <ListWrapper fadeFrom="rgba(0, 192, 255, 0.97)" fadeTo="rgba(0, 192, 255, 0)">
                  {data.results.slice((this.state.page - 1) * 50, this.state.page * 50).map(pokemon => (
                    <Tile
                      key={pokemon.name}
                      {...pokemon}
                      className={styles.pokemonTile}
                      onClick={this.onCharacterSelection}
                    />
                  ))}
                </ListWrapper>
                <div className={styles.appFooter}>
                  <Pagination
                    pageSize={50}
                    current={this.state.page}
                    total={data.count}
                    onChange={this.updatePage}
                    colors={{
                      color: 'rgba(0, 192, 255, 0.97)',
                      backgroundColor: '#fbff8b',
                      colorActive: ' #fbff8b',
                      backgroundColorActive: 'rgba(0, 192, 255, 0.97)',
                    }}
                  />
                </div>
              </Fragment>
            );
          }}
        </DataSource>
        <Modal className={styles.modalBody} visible={!!this.state.selectionUrl} onCancel={this.onClose}>
          {this.state.selectionUrl && (
            <DataSource url={this.state.selectionUrl}>
              {data => {
                return <PokemonDetails {...data} />;
              }}
            </DataSource>
          )}
        </Modal>
      </AppContainer>
    );
  }
}

export default App;
