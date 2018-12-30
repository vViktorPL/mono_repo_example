import React, {Component} from 'react';
import {ListWrapper, Tile, Modal, Pagination, AppContainer, DataSource, Header} from 'library';
import {LocalizationProvider} from 'localization';
import logo from './starwars.png';
import * as styles from './App.module.scss';
import {CharacterDetails} from "./character-details/character-details.component";

const localization = {
  pl: {
    height: "wzrost",
    mass: "waga",
    eyeColor: "kolor oczu",
    birthDay: "data urodzenia",
  },
};

class App extends Component {
  state = {
    page: 1,
    selectionUrl: null,
  };

  updatePage = (page) => {
    this.setState({
      page
    });
  };

  onCharacterSelection = (selectionUrl: string) => {
    this.setState({
      selectionUrl,
    })
  };

  onClose = () => {
    this.setState({
      selectionUrl: null,
    });
  };

  render() {
    return (
      <AppContainer className={styles.appBackground}>
        <LocalizationProvider localization={localization} lang="pl">
          <Header img={logo}/>
          <ListWrapper
            fadeFrom="rgba(0, 0, 0, 1)"
            fadeTo="rgba(0, 0, 0, 0)"
          >
            <DataSource url={`https://swapi.co/api/people/?page=${this.state.page}`}>
              {(data) => (
                data.results.map(character => (
                  <Tile
                    key={character.name}
                    {...character}
                    className={styles.characterTile}
                    onClick={this.onCharacterSelection}
                  />
                ))
              )}
            </DataSource>
          </ListWrapper>
          <div className={styles.appFooter}>
            <Pagination
              pageSize={1}
              current={this.state.page}
              total={9}
              onChange={this.updatePage}
            />
          </div>
          <Modal
            className={styles.modalBody}
            visible={!!this.state.selectionUrl}
            onCancel={this.onClose}
          >
            {this.state.selectionUrl && (
              <DataSource url={this.state.selectionUrl}>
                {(data) => {
                  return (
                    <CharacterDetails
                      {...data}
                    />
                  )
                }}
              </DataSource>
            )}
          </Modal>
        </LocalizationProvider>
      </AppContainer>
    );
  }
}

export default App;
