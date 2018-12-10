import React, {Component} from 'react';
import {Header, Button, Pagination, AppContainer, DataSource} from 'library';
import * as styles from './App.module.scss';
import {CharacterTile} from "./character-tile/character-tile.component";

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
        <div className={styles.appContent}>
          <DataSource url={`https://swapi.co/api/people/?page=${this.state.page}`}>
            {(data) => (
              data.results.map(character => (
                <CharacterTile
                  {...character}
                  onClick={this.onCharacterSelection()}
                />
              ))
            )}
          </DataSource>
        </div>
        <div className={styles.appFooter}>
          <Pagination
            pageSize={1}
            current={this.state.page}
            total={9}
            onChange={this.updatePage}
          />
        </div>
      </AppContainer>
    );
  }
}

export default App;

//Modal.info({
//  iconType: 'none',
//  content: (
//    <div>
//      <p>some messages...some messages...</p>
//      <p>some messages...some messages...</p>
//    </div>
//  ),
//  onOk() {},
//  okText: 'close',
//});
