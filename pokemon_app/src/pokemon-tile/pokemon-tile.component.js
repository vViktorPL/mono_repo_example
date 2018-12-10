// @flow
import React, {PureComponent} from 'react';
import * as styles from "./pokemon-tile.module.scss";

export type PokemonTileProps = {
  name: string,
  url: string,
  onClick: string => *,
}

export class PokemonTile extends PureComponent<PokemonTileProps> {
  render() {
    return (
      <div onClick={() => this.props.onClick(this.props.url)} className={styles.tile}>
        {this.props.name}
      </div>
    )
  }
}