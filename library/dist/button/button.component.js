import _classCallCheck from "/Users/qh4r/tsh/mono_repo_example/library/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/qh4r/tsh/mono_repo_example/library/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/qh4r/tsh/mono_repo_example/library/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/qh4r/tsh/mono_repo_example/library/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/qh4r/tsh/mono_repo_example/library/node_modules/@babel/runtime/helpers/esm/inherits";
import React, { PureComponent } from 'react';
import { Button as AntButton } from 'antd';
export var Button =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Button, _PureComponent);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      return React.createElement(AntButton, this.props);
    }
  }]);

  return Button;
}(PureComponent);