// @flow

import React, { Component } from 'react';
import { ListWrapper, Tile, Modal, Pagination, AppContainer, DataSource, Header } from 'library';
import { LocalizationProvider } from 'localization';
import logo from './starwars.png';
import * as styles from './App.module.scss';
import { CharacterDetails } from './character-details/character-details.component';

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
        <DataSource url="http://localhost:3000/localizations">
          {localization => (
            <LocalizationProvider localization={localization} lang="pl">
              <Header img={logo} />
              <ListWrapper fadeFrom="rgba(0, 0, 0, 1)" fadeTo="rgba(0, 0, 0, 0)">
                <DataSource url={`https://swapi.co/api/people/?page=${this.state.page}`}>
                  {(data: *) =>
                    data.results.map(character => (
                      <Tile
                        key={character.name}
                        {...character}
                        className={styles.characterTile}
                        onClick={this.onCharacterSelection}
                      />
                    ))
                  }
                </DataSource>
              </ListWrapper>
              <div className={styles.appFooter}>
                <Pagination
                  pageSize={1}
                  current={this.state.page}
                  total={9}
                  onChange={this.updatePage}
                  colors={{
                    color: 'rgba(251, 221, 42, 1)',
                    backgroundColor: 'black',
                    colorActive: 'black',
                    backgroundColorActive: 'rgba(251, 221, 42, 1)',
                  }}
                />
              </div>
              <Modal className={styles.modalBody} visible={!!this.state.selectionUrl} onCancel={this.onClose}>
                {this.state.selectionUrl && (
                  <DataSource url={this.state.selectionUrl}>
                    {(data: *) => {
                      return <CharacterDetails {...data} />;
                    }}
                  </DataSource>
                )}
              </Modal>
            </LocalizationProvider>
          )}
        </DataSource>
      </AppContainer>
    );
  }
}

export default App;
