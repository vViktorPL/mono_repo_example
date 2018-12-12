import _classCallCheck from "/Users/qh4r/tsh/mono_repo_example/library/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/qh4r/tsh/mono_repo_example/library/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/qh4r/tsh/mono_repo_example/library/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/qh4r/tsh/mono_repo_example/library/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/qh4r/tsh/mono_repo_example/library/node_modules/@babel/runtime/helpers/esm/inherits";
import React, { PureComponent } from 'react';
import { Modal as AntModal } from 'antd';
import './modal.scss';
export var Modal =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Modal, _PureComponent);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, _getPrototypeOf(Modal).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      return React.createElement(AntModal, Object.assign({}, this.props, {
        title: null,
        footer: null,
        bodyStyle: {
          backgroundColor: 'inherit'
        }
      }));
    }
  }]);

  return Modal;
}(PureComponent);