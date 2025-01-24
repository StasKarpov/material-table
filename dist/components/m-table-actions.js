"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(
  require("@babel/runtime/helpers/classCallCheck")
);
var _createClass2 = _interopRequireDefault(
  require("@babel/runtime/helpers/createClass")
);
var _possibleConstructorReturn2 = _interopRequireDefault(
  require("@babel/runtime/helpers/possibleConstructorReturn")
);
var _getPrototypeOf2 = _interopRequireDefault(
  require("@babel/runtime/helpers/getPrototypeOf")
);
var _inherits2 = _interopRequireDefault(
  require("@babel/runtime/helpers/inherits")
);
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _getRequireWildcardCache(e) {
  if ("function" != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || ("object" != _typeof(e) && "function" != typeof e))
    return { default: e };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = { __proto__: null },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e)
    if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : (n[u] = e[u]);
    }
  return (n["default"] = e), t && t.set(e, n), n;
}
function _callSuper(t, o, e) {
  return (
    (o = (0, _getPrototypeOf2["default"])(o)),
    (0, _possibleConstructorReturn2["default"])(
      t,
      _isNativeReflectConstruct()
        ? Reflect.construct(
            o,
            e || [],
            (0, _getPrototypeOf2["default"])(t).constructor
          )
        : o.apply(t, e)
    )
  );
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
} /* eslint-disable no-unused-vars */
/* eslint-enable no-unused-vars */
var MTableActions = /*#__PURE__*/ (function (_React$Component) {
  function MTableActions() {
    (0, _classCallCheck2["default"])(this, MTableActions);
    return _callSuper(this, MTableActions, arguments);
  }
  (0, _inherits2["default"])(MTableActions, _React$Component);
  return (0, _createClass2["default"])(MTableActions, [
    {
      key: "render",
      value: function render() {
        var _this = this;
        if (this.props.actions) {
          return this.props.actions.map(function (action, index) {
            return /*#__PURE__*/ React.createElement(
              _this.props.components.Action,
              {
                action: action,
                key: "action-" + index,
                data: _this.props.data,
                size: _this.props.size,
                disabled: _this.props.disabled,
              }
            );
          });
        }
        return null;
      },
    },
  ]);
})(React.Component);
MTableActions.defaultProps = {
  actions: [],
  data: {},
};
MTableActions.propTypes = {
  components: _propTypes["default"].object.isRequired,
  actions: _propTypes["default"].array.isRequired,
  data: _propTypes["default"].oneOfType([
    _propTypes["default"].object,
    _propTypes["default"].arrayOf(_propTypes["default"].object),
  ]),
  disabled: _propTypes["default"].bool,
  size: _propTypes["default"].string,
};
var _default = (exports["default"] = MTableActions);
