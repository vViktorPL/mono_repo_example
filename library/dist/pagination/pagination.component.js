import _classCallCheck from "/Users/qh4r/tsh/mono_repo_example/library/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/qh4r/tsh/mono_repo_example/library/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/qh4r/tsh/mono_repo_example/library/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/qh4r/tsh/mono_repo_example/library/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/qh4r/tsh/mono_repo_example/library/node_modules/@babel/runtime/helpers/esm/inherits";
import React, { PureComponent } from 'react';
import { Pagination as AntdPagination } from 'antd';
export var Pagination =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Pagination, _PureComponent);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, _getPrototypeOf(Pagination).apply(this, arguments));
  }

  _createClass(Pagination, [{
    key: "render",
    value: function render() {
      return React.createElement(AntdPagination, this.props);
    }
  }]);

  return Pagination;
}(PureComponent);