import _classCallCheck from "/Users/qh4r/tsh/mono_repo_example/library/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/qh4r/tsh/mono_repo_example/library/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/qh4r/tsh/mono_repo_example/library/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/qh4r/tsh/mono_repo_example/library/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/qh4r/tsh/mono_repo_example/library/node_modules/@babel/runtime/helpers/esm/inherits";
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import * as styles from "./tile.module.scss";
export var Tile =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Tile, _PureComponent);

  function Tile() {
    _classCallCheck(this, Tile);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tile).apply(this, arguments));
  }

  _createClass(Tile, [{
    key: "render",
    value: function render() {
      var _this = this;

      return React.createElement("div", {
        onClick: function onClick() {
          return _this.props.onClick(_this.props.url);
        },
        className: classNames(styles.tile, this.props.className)
      }, this.props.name);
    }
  }]);

  return Tile;
}(PureComponent);