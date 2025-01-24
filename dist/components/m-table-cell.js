"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(
  require("@babel/runtime/helpers/extends")
);
var _objectWithoutProperties2 = _interopRequireDefault(
  require("@babel/runtime/helpers/objectWithoutProperties")
);
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
var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _parseISO = _interopRequireDefault(require("date-fns/parseISO"));
var CommonValues = _interopRequireWildcard(require("../utils/common-values"));
var _excluded = [
  "icons",
  "columnDef",
  "rowData",
  "errorState",
  "cellEditable",
  "onCellEditStarted",
];
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

/* eslint-disable no-useless-escape */
var isoDateRegex =
  /^\d{4}-(0[1-9]|1[0-2])-([12]\d|0[1-9]|3[01])([T\s](([01]\d|2[0-3])\:[0-5]\d|24\:00)(\:[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3])\:?([0-5]\d)?)?)?$/;
/* eslint-enable no-useless-escape */
var MTableCell = (exports["default"] = /*#__PURE__*/ (function (
  _React$Component
) {
  function MTableCell() {
    var _this;
    (0, _classCallCheck2["default"])(this, MTableCell);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, MTableCell, [].concat(args));
    (0, _defineProperty2["default"])(_this, "handleClickCell", function (e) {
      if (_this.props.columnDef.disableClick) {
        e.stopPropagation();
      }
    });
    (0, _defineProperty2["default"])(_this, "getStyle", function () {
      var width = CommonValues.reducePercentsInCalc(
        _this.props.columnDef.tableData.width,
        _this.props.scrollWidth
      );
      var cellStyle = {
        color: "inherit",
        width: width,
        maxWidth: _this.props.columnDef.maxWidth,
        minWidth: _this.props.columnDef.minWidth,
        boxSizing: "border-box",
        fontSize: "inherit",
        fontFamily: "inherit",
        fontWeight: "inherit",
      };
      if (typeof _this.props.columnDef.cellStyle === "function") {
        cellStyle = (0, _objectSpread2["default"])(
          {},
          cellStyle,
          _this.props.columnDef.cellStyle(
            _this.props.value,
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
      if (_this.props.columnDef.disableClick) {
        cellStyle.cursor = "default";
      }
      return (0, _objectSpread2["default"])({}, _this.props.style, cellStyle);
    });
    return _this;
  }
  (0, _inherits2["default"])(MTableCell, _React$Component);
  return (0, _createClass2["default"])(MTableCell, [
    {
      key: "getRenderValue",
      value: function getRenderValue() {
        var dateLocale =
          this.props.columnDef.dateSetting &&
          this.props.columnDef.dateSetting.locale
            ? this.props.columnDef.dateSetting.locale
            : undefined;
        if (
          this.props.columnDef.emptyValue !== undefined &&
          (this.props.value === undefined || this.props.value === null)
        ) {
          return this.getEmptyValue(this.props.columnDef.emptyValue);
        }
        if (this.props.columnDef.render) {
          if (this.props.rowData) {
            return this.props.columnDef.render(this.props.rowData, "row");
          } else if (this.props.value) {
            return this.props.columnDef.render(this.props.value, "group");
          }
        } else if (this.props.columnDef.type === "boolean") {
          var style = {
            textAlign: "left",
            verticalAlign: "middle",
            width: 48,
          };
          if (this.props.value) {
            return /*#__PURE__*/ React.createElement(this.props.icons.Check, {
              style: style,
            });
          } else {
            return /*#__PURE__*/ React.createElement(
              this.props.icons.ThirdStateCheck,
              {
                style: style,
              }
            );
          }
        } else if (this.props.columnDef.type === "date") {
          if (this.props.value instanceof Date) {
            return this.props.value.toLocaleDateString(dateLocale);
          } else if (isoDateRegex.exec(this.props.value)) {
            return (0, _parseISO["default"])(
              this.props.value
            ).toLocaleDateString(dateLocale);
          } else {
            return this.props.value;
          }
        } else if (this.props.columnDef.type === "time") {
          if (this.props.value instanceof Date) {
            return this.props.value.toLocaleTimeString();
          } else if (isoDateRegex.exec(this.props.value)) {
            return (0, _parseISO["default"])(
              this.props.value
            ).toLocaleTimeString(dateLocale);
          } else {
            return this.props.value;
          }
        } else if (this.props.columnDef.type === "datetime") {
          if (this.props.value instanceof Date) {
            return this.props.value.toLocaleString();
          } else if (isoDateRegex.exec(this.props.value)) {
            return (0, _parseISO["default"])(this.props.value).toLocaleString(
              dateLocale
            );
          } else {
            return this.props.value;
          }
        } else if (this.props.columnDef.type === "currency") {
          return this.getCurrencyValue(
            this.props.columnDef.currencySetting,
            this.props.value
          );
        } else if (typeof this.props.value === "boolean") {
          // To avoid forwardref boolean children.
          return this.props.value.toString();
        }
        return this.props.value;
      },
    },
    {
      key: "getEmptyValue",
      value: function getEmptyValue(emptyValue) {
        if (typeof emptyValue === "function") {
          return this.props.columnDef.emptyValue(this.props.rowData);
        } else {
          return emptyValue;
        }
      },
    },
    {
      key: "getCurrencyValue",
      value: function getCurrencyValue(currencySetting, value) {
        if (currencySetting !== undefined) {
          return new Intl.NumberFormat(
            currencySetting.locale !== undefined
              ? currencySetting.locale
              : "en-US",
            {
              style: "currency",
              currency:
                currencySetting.currencyCode !== undefined
                  ? currencySetting.currencyCode
                  : "USD",
              minimumFractionDigits:
                currencySetting.minimumFractionDigits !== undefined
                  ? currencySetting.minimumFractionDigits
                  : 2,
              maximumFractionDigits:
                currencySetting.maximumFractionDigits !== undefined
                  ? currencySetting.maximumFractionDigits
                  : 2,
            }
          ).format(value !== undefined ? value : 0);
        } else {
          return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(value !== undefined ? value : 0);
        }
      },
    },
    {
      key: "render",
      value: function render() {
        var _this2 = this;
        var _this$props = this.props,
          icons = _this$props.icons,
          columnDef = _this$props.columnDef,
          rowData = _this$props.rowData,
          errorState = _this$props.errorState,
          cellEditable = _this$props.cellEditable,
          onCellEditStarted = _this$props.onCellEditStarted,
          cellProps = (0, _objectWithoutProperties2["default"])(
            _this$props,
            _excluded
          );
        var cellAlignment =
          columnDef.align !== undefined
            ? columnDef.align
            : ["numeric", "currency"].indexOf(this.props.columnDef.type) !== -1
            ? "right"
            : "left";
        var renderValue = this.getRenderValue();
        if (cellEditable) {
          renderValue = /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                borderBottom: "1px dashed grey",
                cursor: "pointer",
                width: "max-content",
              },
              onClick: function onClick(e) {
                e.stopPropagation();
                onCellEditStarted(_this2.props.rowData, _this2.props.columnDef);
              },
            },
            renderValue
          );
        }
        return /*#__PURE__*/ React.createElement(
          _TableCell["default"],
          (0, _extends2["default"])(
            {
              size: this.props.size,
            },
            cellProps,
            {
              style: this.getStyle(),
              align: cellAlignment,
              onClick: this.handleClickCell,
            }
          ),
          this.props.children,
          renderValue
        );
      },
    },
  ]);
})(React.Component));
MTableCell.defaultProps = {
  columnDef: {},
  value: undefined,
};
MTableCell.propTypes = {
  columnDef: _propTypes["default"].object.isRequired,
  value: _propTypes["default"].any,
  rowData: _propTypes["default"].object,
  errorState: _propTypes["default"].oneOfType([
    _propTypes["default"].object,
    _propTypes["default"].bool,
  ]),
};
