"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _isomorphicFetch = require("isomorphic-fetch");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/media/larry/B89880DC98809B10/Javascript/NextJs/expressAPI/pages/find.js?entry";


var _class = function (_Component) {
  (0, _inherits3.default)(_class, _Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(_link2.default, { href: "/", __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "Back Home"))), _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, this.props.item.title), _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, this.props.item.subtitle, " - ", this.props.item.seller));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req,
            query = _ref.query;
        var isServer, res, json;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isServer = !!req;

                console.log("getInitialProps called:", isServer ? "server" : "client");

                if (!isServer) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", { item: query.foundItems });

              case 6:
                _context.next = 8;
                return (0, _isomorphicFetch2.default)("/_data/findItems", {
                  headers: { Accept: "application/json" }
                });

              case 8:
                res = _context.sent;
                _context.next = 11;
                return res.json();

              case 11:
                json = _context.sent;
                return _context.abrupt("return", { item: json });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _class;
}(_react.Component);

exports.default = _class;