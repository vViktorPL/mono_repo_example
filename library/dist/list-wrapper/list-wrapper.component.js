import * as React from 'react';
import * as styles from './list-wrapper.module.scss';
export var ListWrapper = function ListWrapper(_ref) {
  var children = _ref.children,
      fadeFrom = _ref.fadeFrom,
      fadeTo = _ref.fadeTo;
  return React.createElement("div", {
    className: styles.listContainer
  }, React.createElement("div", {
    style: {
      backgroundImage: "linear-gradient(".concat(fadeFrom, ", ").concat(fadeTo, ")")
    },
    className: styles.topOverlay
  }), React.createElement("div", {
    className: styles.list
  }, children), React.createElement("div", {
    style: {
      backgroundImage: "linear-gradient(".concat(fadeTo, ", ").concat(fadeFrom, ")")
    },
    className: styles.bottomOverlay
  }));
};