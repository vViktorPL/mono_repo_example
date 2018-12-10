// @flow
import React, {PureComponent} from 'react';
import * as styles from "./character-tile.module.scss";

export type CharacterTileProps = {
  name: string,
  height: string,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
  url: string,
  onClick: string => *,
}

export class CharacterTile extends PureComponent<CharacterTileProps> {
  render() {
    return (
      <div onClick={() => this.props.onClick(this.props.url)} className={styles.tile}>
        {this.props.name}
      </div>
    )
  }
}