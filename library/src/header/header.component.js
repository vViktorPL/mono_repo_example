// @flow
import React, { PureComponent } from 'react';
import * as styles from './header.module.css';

export type HeaderProps = {
  img: string,
};

export class Header extends PureComponent<HeaderProps> {
  render() {
    return (
      <div className={styles.headerContainer}>
        <img className={styles.logo} src={this.props.img} alt="logo" />
      </div>
    );
  }
}
