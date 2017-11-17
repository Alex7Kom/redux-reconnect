'use strict';

var connect = require('react-redux').connect;

function reconnect (comp) {
  return connect(
    comp.mapStateToProps,
    comp.mapDispatchToProps,
    comp.mergeProps,
    comp.options
  )(comp);
}

module.exports = {
  reconnect: reconnect
};
