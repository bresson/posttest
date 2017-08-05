
          window.__NEXT_REGISTER_PAGE('/item', function() {
            var comp = module.exports =
webpackJsonp([8],{

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(543);

var _link2 = _interopRequireDefault(_link);

var _isomorphicFetch = __webpack_require__(550);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/media/larry/B89880DC98809B10/Javascript/NextJs/expressAPI/pages/item.js?entry";


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

                return _context.abrupt("return", { item: query.itemData });

              case 6:
                _context.next = 8;
                return (0, _isomorphicFetch2.default)("/_data/item", {
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/media/larry/B89880DC98809B10/Javascript/NextJs/expressAPI/pages/item.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/media/larry/B89880DC98809B10/Javascript/NextJs/expressAPI/pages/item.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/item")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(549);


/***/ })

},[552]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pdGVtLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaXRlbS5qcz9hMDI5OGNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSwgcXVlcnkgfSkge1xuICAgIGNvbnN0IGlzU2VydmVyID0gISFyZXE7XG5cbiAgICBjb25zb2xlLmxvZyhcImdldEluaXRpYWxQcm9wcyBjYWxsZWQ6XCIsIGlzU2VydmVyID8gXCJzZXJ2ZXJcIiA6IFwiY2xpZW50XCIpO1xuXG4gICAgaWYgKGlzU2VydmVyKSB7XG4gICAgICAvLyBXaGVuIGJlaW5nIHJlbmRlcmVkIHNlcnZlci1zaWRlLCB3ZSBoYXZlIGFjY2VzcyB0byBvdXIgZGF0YSBpbiBxdWVyeSB0aGF0IHdlIHB1dCB0aGVyZSBpbiByb3V0ZXMvaXRlbS5qcyxcbiAgICAgIC8vIHNhdmluZyB1cyBhbiBodHRwIGNhbGwuIE5vdGUgdGhhdCBpZiB3ZSB3ZXJlIHRvIHRyeSB0byByZXF1aXJlKCcuLi9vcGVyYXRpb25zL2dldC1pdGVtJykgaGVyZSxcbiAgICAgIC8vIGl0IHdvdWxkIHJlc3VsdCBpbiBhIHdlYnBhY2sgZXJyb3IuXG4gICAgICByZXR1cm4geyBpdGVtOiBxdWVyeS5pdGVtRGF0YSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPbiB0aGUgY2xpZW50LCB3ZSBzaG91bGQgZmV0Y2ggdGhlIGRhdGEgcmVtb3RlbHlcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL19kYXRhL2l0ZW1cIiwge1xuICAgICAgICBoZWFkZXJzOiB7IEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIHJldHVybiB7IGl0ZW06IGpzb24gfTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YT5CYWNrIEhvbWU8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIHt0aGlzLnByb3BzLml0ZW0udGl0bGV9XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pdGVtLnN1YnRpdGxlfSAtIHt0aGlzLnByb3BzLml0ZW0uc2VsbGVyfVxuICAgICAgICA8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvaXRlbS5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTs7Ozs7O0FBL0JBO0FBQUE7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7OztBQUdBO0FBQ0E7QUFEQTs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFsQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        