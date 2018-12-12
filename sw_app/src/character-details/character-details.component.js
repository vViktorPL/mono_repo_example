// @flow
import React, {PureComponent} from 'react';
import * as styles from "./character-details.module.scss";

export type CharacterDetailsProps = {
  name: string,
  height: string,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
  url: string,
}

export class CharacterDetails extends PureComponent<CharacterDetailsProps> {
  render() {
    return (
      <div  className={styles.tile}>
        {this.props.name}
      </div>
    )
  }
}