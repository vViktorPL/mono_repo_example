import _classCallCheck from "/Users/qh4r/tsh/mono_repo_example/localization/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/qh4r/tsh/mono_repo_example/localization/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/qh4r/tsh/mono_repo_example/localization/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/qh4r/tsh/mono_repo_example/localization/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/qh4r/tsh/mono_repo_example/localization/node_modules/@babel/runtime/helpers/esm/inherits";
import React, { PureComponent } from 'react';
import * as styles from "./header.module.scss";
export var Header =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Header, _PureComponent);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: styles.headerContainer
      }, React.createElement("img", {
        className: styles.logo,
        src: this.props.img,
        alt: "logo"
      }));
    }
  }]);

  return Header;
}(PureComponent);