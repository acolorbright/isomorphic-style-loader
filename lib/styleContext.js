'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleContext = _react2.default.createContext({
  insertCss: function insertCss() {}
}); /**
     * Isomorphic CSS style loader for Webpack
     *
     * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */

exports.default = StyleContext;