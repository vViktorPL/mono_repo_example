function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

    var _temp, _this;

    _classCallCheck(this, DataSource);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DataSource)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      data: null,
      error: null,
      loading: true,
      fetchedUrl: null
    }, _this.loadData = function () {
      _this.setState({
        loading: true,
        data: null,
        error: null,
        fetchedUrl: _this.props.url
      }, function () {
        return setTimeout(function () {
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
      });
    }, _temp));
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