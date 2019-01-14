'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _styleContext = require('./styleContext');

var _styleContext2 = _interopRequireDefault(_styleContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withStyles() {
  for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  return function wrapWithStyles(ComposedComponent) {
    var WithStyles = function (_Component) {
      (0, _inherits3.default)(WithStyles, _Component);

      function WithStyles(props, context) {
        (0, _classCallCheck3.default)(this, WithStyles);

        var _this = (0, _possibleConstructorReturn3.default)(this, (WithStyles.__proto__ || (0, _getPrototypeOf2.default)(WithStyles)).call(this, props));

        _this.removeCss = context.insertCss.apply(context, styles);
        return _this;
      }

      (0, _createClass3.default)(WithStyles, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (this.removeCss) {
            setTimeout(this.removeCss, 0);
          }
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(ComposedComponent, this.props);
        }
      }]);
      return WithStyles;
    }(_react.Component);

    var displayName = ComposedComponent.displayName || ComposedComponent.name || 'Component';

    WithStyles.displayName = 'WithStyles(' + displayName + ')';
    WithStyles.contextType = _styleContext2.default;
    WithStyles.ComposedComponent = ComposedComponent;

    return (0, _hoistNonReactStatics2.default)(WithStyles, ComposedComponent);
  };
} /**
   * Isomorphic CSS style loader for Webpack
   *
   * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

exports.default = withStyles;