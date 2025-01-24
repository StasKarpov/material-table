"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.selectionMaxWidth =
  exports.rowActions =
  exports.reducePercentsInCalc =
  exports.elementSize =
  exports.baseIconSize =
  exports.actionsColumnWidth =
    void 0;
var elementSize = (exports.elementSize = function elementSize(props) {
  return props.options.padding === "default" ? "medium" : "small";
});
var baseIconSize = (exports.baseIconSize = function baseIconSize(props) {
  return elementSize(props) === "medium" ? 48 : 32;
});
var rowActions = (exports.rowActions = function rowActions(props) {
  return props.actions.filter(function (a) {
    return a.position === "row" || typeof a === "function";
  });
});
var actionsColumnWidth = (exports.actionsColumnWidth =
  function actionsColumnWidth(props) {
    return rowActions(props).length * baseIconSize(props);
  });
var selectionMaxWidth = (exports.selectionMaxWidth = function selectionMaxWidth(
  props,
  maxTreeLevel
) {
  return baseIconSize(props) + 9 * maxTreeLevel;
});
var reducePercentsInCalc = (exports.reducePercentsInCalc =
  function reducePercentsInCalc(calc, fullValue) {
    var index = calc.indexOf("%");
    while (index !== -1) {
      var leftIndex = index - 1;
      while (leftIndex >= 0 && "0123456789.".indexOf(calc[leftIndex]) !== -1) {
        leftIndex--;
      }
      leftIndex++;
      var value = Number.parseFloat(calc.substring(leftIndex, index));
      calc =
        calc.substring(0, leftIndex) +
        (value * fullValue) / 100 +
        "px" +
        calc.substring(index + 1);
      index = calc.indexOf("%");
    }
    return calc;
  });
