"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;
var _objectSpread2 = _interopRequireDefault(
  require("@babel/runtime/helpers/objectSpread")
);
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
var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));
var _IconButton = _interopRequireDefault(
  require("@material-ui/core/IconButton")
);
var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));
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
var MTableAction = /*#__PURE__*/ (function (_React$Component) {
  function MTableAction() {
    (0, _classCallCheck2["default"])(this, MTableAction);
    return _callSuper(this, MTableAction, arguments);
  }
  (0, _inherits2["default"])(MTableAction, _React$Component);
  return (0, _createClass2["default"])(MTableAction, [
    {
      key: "render",
      value: function render() {
        var _this = this;
        var action = this.props.action;
        if (typeof action === "function") {
          action = action(this.props.data);
          if (!action) {
            return null;
          }
        }
        if (action.action) {
          action = action.action(this.props.data);
          if (!action) {
            return null;
          }
        }
        if (action.hidden) {
          return null;
        }
        var disabled = action.disabled || this.props.disabled;
        var handleOnClick = function handleOnClick(event) {
          if (action.onClick) {
            action.onClick(event, _this.props.data);
            event.stopPropagation();
          }
        };
        var icon =
          typeof action.icon === "string"
            ? /*#__PURE__*/ React.createElement(
                _Icon["default"],
                action.iconProps,
                action.icon
              )
            : typeof action.icon === "function"
            ? action.icon(
                (0, _objectSpread2["default"])({}, action.iconProps, {
                  disabled: disabled,
                })
              )
            : /*#__PURE__*/ React.createElement(action.icon, null);
        var button = /*#__PURE__*/ React.createElement(
          _IconButton["default"],
          {
            size: this.props.size,
            color: "inherit",
            disabled: disabled,
            onClick: handleOnClick,
          },
          icon
        );
        if (action.tooltip) {
          // fix for issue #1049
          // https://github.com/mbrn/material-table/issues/1049
          return disabled
            ? /*#__PURE__*/ React.createElement(
                _Tooltip["default"],
                {
                  title: action.tooltip,
                },
                /*#__PURE__*/ React.createElement("span", null, button)
              )
            : /*#__PURE__*/ React.createElement(
                _Tooltip["default"],
                {
                  title: action.tooltip,
                },
                button
              );
        } else {
          return button;
        }
      },
    },
  ]);
})(React.Component);
MTableAction.defaultProps = {
  action: {},
  data: {},
};
MTableAction.propTypes = {
  action: _propTypes["default"].oneOfType([
    _propTypes["default"].func,
    _propTypes["default"].object,
  ]).isRequired,
  data: _propTypes["default"].oneOfType([
    _propTypes["default"].object,
    _propTypes["default"].arrayOf(_propTypes["default"].object),
  ]),
  disabled: _propTypes["default"].bool,
  size: _propTypes["default"].string,
};
var _default = (exports["default"] = MTableAction);
