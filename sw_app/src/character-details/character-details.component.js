// @flow
import React, {PureComponent} from 'react';
import {TranslatedMessage} from 'localization';
import classNames from 'classnames';
import * as styles from "./character-details.module.scss";

export type CharacterDetailsProps = {
  name: string,
  height: string,
  mass: string,
  eye_color: string,
  birth_year: string,
  url: string,
}

export class CharacterDetails extends PureComponent<CharacterDetailsProps> {
  render() {
    return (
      <div className={styles.tile}>
        <div className={classNames(styles.col, styles.col100, styles.title)}>
          {this.props.name}
        </div>
        <div className={classNames(styles.col, styles.col50, styles.row)}>
          <TranslatedMessage localeKey="height" />
          <span>{this.props.height}</span>
        </div>
        <div className={classNames(styles.col, styles.col50, styles.row)}>
          <TranslatedMessage localeKey="mass" />
          <span>{this.props.mass}</span>
        </div>
        <div className={classNames(styles.col, styles.col50, styles.row)}>
          <TranslatedMessage localeKey="eyeColor" />
          <span className={styles.color} style={{backgroundColor: this.props.eye_color}} />
        </div>
        <div className={classNames(styles.col, styles.col50, styles.row)}>
          <TranslatedMessage localeKey="birthDay" />
          <span>{this.props.birth_year}</span>
        </div>
      </div>
    )
  }
}