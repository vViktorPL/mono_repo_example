// @flow

import * as React from 'react';
import * as styles from './list-wrapper.module.css';

export type ListWrapperProps = {
  children: React.Node,
  fadeFrom: string,
  fadeTo: string,
};

export const ListWrapper = ({ children, fadeFrom, fadeTo }: ListWrapperProps) => (
  <div className={styles.listContainer}>
    <div style={{ backgroundImage: `linear-gradient(${fadeFrom}, ${fadeTo})` }} className={styles.topOverlay} />
    <div className={styles.list}>{children}</div>
    <div style={{ backgroundImage: `linear-gradient(${fadeTo}, ${fadeFrom})` }} className={styles.bottomOverlay} />
  </div>
);
