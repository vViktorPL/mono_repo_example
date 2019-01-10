// @flow
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import * as styles from './tile.module.css';

export type TileProps = {
  name: string,
  url: string,
  onClick: string => *,
  className?: string,
};

export class Tile extends PureComponent<TileProps> {
  render() {
    return (
      <div onClick={() => this.props.onClick(this.props.url)} className={classNames(styles.tile, this.props.className)}>
        {this.props.name}
      </div>
    );
  }
}
