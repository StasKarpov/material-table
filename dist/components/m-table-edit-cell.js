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
var _defineProperty2 = _interopRequireDefault(
  require("@babel/runtime/helpers/defineProperty")
);
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));
var _CircularProgress = _interopRequireDefault(
  require("@material-ui/core/CircularProgress")
);
var _colorManipulator = require("@material-ui/core/styles/colorManipulator");
var _withTheme = _interopRequireDefault(
  require("@material-ui/core/styles/withTheme")
);
var _ = require("..");
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
var MTableEditCell = /*#__PURE__*/ (function (_React$Component) {
  function MTableEditCell(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, MTableEditCell);
    _this = _callSuper(this, MTableEditCell, [props]);
    (0, _defineProperty2["default"])(_this, "getStyle", function () {
      var cellStyle = {
        boxShadow: "2px 0px 15px rgba(125,147,178,.25)",
        color: "inherit",
        width: _this.props.columnDef.tableData.width,
        boxSizing: "border-box",
        fontSize: "inherit",
        fontFamily: "inherit",
        fontWeight: "inherit",
        padding: "0 16px",
      };
      if (typeof _this.props.columnDef.cellStyle === "function") {
        cellStyle = (0, _objectSpread2["default"])(
          {},
          cellStyle,
          _this.props.columnDef.cellStyle(
            _this.state.value,
            _this.props.rowData
          )
        );
      } else {
        cellStyle = (0, _objectSpread2["default"])(
          {},
          cellStyle,
          _this.props.columnDef.cellStyle
        );
      }
      if (typeof _this.props.cellEditable.cellStyle === "function") {
        cellStyle = (0, _objectSpread2["default"])(
          {},
          cellStyle,
          _this.props.cellEditable.cellStyle(
            _this.state.value,
            _this.props.rowData,
            _this.props.columnDef
          )
        );
      } else {
        cellStyle = (0, _objectSpread2["default"])(
          {},
          cellStyle,
          _this.props.cellEditable.cellStyle
        );
      }
      return cellStyle;
    });
    (0, _defineProperty2["default"])(_this, "handleKeyDown", function (e) {
      if (e.keyCode === 13) {
        _this.onApprove();
      } else if (e.keyCode === 27) {
        _this.onCancel();
      }
    });
    (0, _defineProperty2["default"])(_this, "onApprove", function () {
      _this.setState(
        {
          isLoading: true,
        },
        function () {
          _this.props.cellEditable
            .onCellEditApproved(
              _this.state.value,
              // newValue
              _this.props.rowData[_this.props.columnDef.field],
              // oldValue
              _this.props.rowData,
              // rowData with old value
              _this.props.columnDef // columnDef
            )
            .then(function () {
              _this.setState({
                isLoading: false,
              });
              _this.props.onCellEditFinished(
                _this.props.rowData,
                _this.props.columnDef
              );
            })
            ["catch"](function (error) {
              _this.setState({
                isLoading: false,
              });
            });
        }
      );
    });
    (0, _defineProperty2["default"])(_this, "onCancel", function () {
      _this.props.onCellEditFinished(
        _this.props.rowData,
        _this.props.columnDef
      );
    });
    _this.state = {
      isLoading: false,
      value: _this.props.rowData[_this.props.columnDef.field],
    };
    return _this;
  }
  (0, _inherits2["default"])(MTableEditCell, _React$Component);
  return (0, _createClass2["default"])(MTableEditCell, [
    {
      key: "renderActions",
      value: function renderActions() {
        if (this.state.isLoading) {
          return /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                display: "flex",
                justifyContent: "center",
                width: 60,
              },
            },
            /*#__PURE__*/ React.createElement(_CircularProgress["default"], {
              size: 20,
            })
          );
        }
        var actions = [
          {
            icon: this.props.icons.Check,
            tooltip: this.props.localization.saveTooltip,
            onClick: this.onApprove,
            disabled: this.state.isLoading,
          },
          {
            icon: this.props.icons.Clear,
            tooltip: this.props.localization.cancelTooltip,
            onClick: this.onCancel,
            disabled: this.state.isLoading,
          },
        ];
        return /*#__PURE__*/ React.createElement(
          this.props.components.Actions,
          {
            actions: actions,
            components: this.props.components,
            size: "small",
          }
        );
      },
    },
    {
      key: "render",
      value: function render() {
        var _this2 = this;
        return /*#__PURE__*/ React.createElement(
          _TableCell["default"],
          {
            size: this.props.size,
            style: this.getStyle(),
            padding: "none",
          },
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
              },
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  flex: 1,
                  marginRight: 4,
                },
              },
              /*#__PURE__*/ React.createElement(
                this.props.components.EditField,
                {
                  columnDef: this.props.columnDef,
                  value: this.state.value,
                  onChange: function onChange(value) {
                    return _this2.setState({
                      value: value,
                    });
                  },
                  onKeyDown: this.handleKeyDown,
                  disabled: this.state.isLoading,
                  autoFocus: true,
                }
              )
            ),
            this.renderActions()
          )
        );
      },
    },
  ]);
})(React.Component);
MTableEditCell.defaultProps = {
  columnDef: {},
};
MTableEditCell.propTypes = {
  cellEditable: _propTypes["default"].object.isRequired,
  columnDef: _propTypes["default"].object.isRequired,
  components: _propTypes["default"].object.isRequired,
  errorState: _propTypes["default"].oneOfType([
    _propTypes["default"].object,
    _propTypes["default"].bool,
  ]),
  icons: _propTypes["default"].object.isRequired,
  localization: _propTypes["default"].object.isRequired,
  onCellEditFinished: _propTypes["default"].func.isRequired,
  rowData: _propTypes["default"].object.isRequired,
  size: _propTypes["default"].string,
};
var _default = (exports["default"] = (0, _withTheme["default"])(
  MTableEditCell
));
