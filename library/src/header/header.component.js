// @flow
import React, {PureComponent} from 'react';
import * as styles from "./header.module.scss";

export type HeaderProps = {
  text: string,
};

export class Header extends PureComponent<HeaderProps> {
  render() {
    return <div className={styles.headerContainer}>
      {this.props.text}
    </div>
  }
}