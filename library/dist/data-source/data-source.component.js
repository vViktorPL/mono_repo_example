import _classCallCheck from "/Users/qh4r/tsh/mono_repo_example/library/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/qh4r/tsh/mono_repo_example/library/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/qh4r/tsh/mono_repo_example/library/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/qh4r/tsh/mono_repo_example/library/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/qh4r/tsh/mono_repo_example/library/node_modules/@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import { Spin } from 'antd';
import * as styles from './data-source.module.scss';
import { Button } from "..";
import classNames from 'classnames';
export var DataSource =
/*#__PURE__*/
function (_Component) {
  _inherits(DataSource, _Component);

  function DataSource() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DataSource);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DataSource)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      data: null,
      error: null,
      loading: true,
      fetchedUrl: null
    };

    _this.loadData = function () {
      _this.setState({
        loading: true,
        data: null,
        error: null,
        fetchedUrl: _this.props.url
      }, function () {
        return fetch(_this.props.url).then(function (data) {
          return data.json();
        }).then(function (result) {
          return _this.setState({
            data: result,
            error: null,
            loading: false
          });
        }).catch(function () {
          _this.setState({
            loading: false,
            data: null,
            error: "Something went wrong"
          });
        });
      });
    };

    return _this;
  }

  _createClass(DataSource, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.url !== this.state.fetchedUrl) {
        this.loadData();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var _this$state = this.state,
          loading = _this$state.loading,
          data = _this$state.data,
          error = _this$state.error;
      if (loading) return React.createElement("div", {
        className: styles.center
      }, React.createElement(Spin, {
        size: "large"
      }));

      if (error) {
        return React.createElement("div", {
          className: classNames(styles.center, styles.error)
        }, error, React.createElement(Button, {
          className: styles.errorBtn,
          onClick: this.loadData
        }, "Retry"));
      }

      return children(data);
    }
  }]);

  return DataSource;
}(Component);