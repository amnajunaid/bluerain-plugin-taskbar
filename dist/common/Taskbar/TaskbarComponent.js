'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _List = require('material-ui/List');

var _List2 = _interopRequireDefault(_List);

var _ListItem = require('material-ui/List/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TaskbarComponent = function TaskbarComponent(props) {
  var items = props.items,
      hideLabels = props.hideLabels,
      rest = _objectWithoutProperties(props, ['items', 'hideLabels']);

  return _react2.default.createElement(
    _List2.default,
    rest,
    items.map(function (item, index) {
      return hideLabels ? _react2.default.createElement(_ListItem2.default, {
        key: index.toString() + ' a',
        primaryText: '',
        leftIcon: item.icon,
        onClick: item.onClick
      }) : _react2.default.createElement(_ListItem2.default, {
        key: index.toString() + ' a',
        primaryText: item.label,
        leftIcon: item.icon,
        onClick: item.onClick
      });
    })
  );
};

TaskbarComponent.propTypes = {
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    icon: _propTypes2.default.object.isRequired,
    label: _propTypes2.default.string.isRequired,
    onClick: _propTypes2.default.func
  })).isRequired,
  hideLabels: _propTypes2.default.bool.isRequired
};
TaskbarComponent.defaultProps = {
  items: [],
  hideLabels: false
};

exports.default = TaskbarComponent;