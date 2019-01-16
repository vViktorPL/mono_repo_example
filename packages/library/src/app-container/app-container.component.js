// @flow

import * as React from 'react';
import './app-container.css';
import classNames from 'classnames';
import * as styles from './app-container.module.css';

export type AppContainerProps = {
  children: React.Node,
  className: string,
};

export const AppContainer = ({ children, className }: AppContainerProps) => (
  <div className={classNames(styles.appContainer, className)}>{children}</div>
);
