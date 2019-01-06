import * as React from 'react';
import './app-container.css';
import classNames from 'classnames';
import * as styles from './app-container.module.css';
export var AppContainer = function AppContainer(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return React.createElement("div", {
    className: classNames(styles.appContainer, className)
  }, children);
};