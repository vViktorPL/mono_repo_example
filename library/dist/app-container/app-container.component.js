import * as React from 'react';
import './app-container.scss';
import classNames from 'classnames';
import * as styles from './app-container.module.scss';
export var AppContainer = function AppContainer(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return React.createElement("div", {
    className: classNames(styles.appContainer, className)
  }, children);
};