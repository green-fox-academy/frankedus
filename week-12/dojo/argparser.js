'use strict';

var ARG_START = ' -';

function parseArguments(string) {
  var args = string.split(ARG_START).slice(1);
  return args.reduce(parseOneArg, {});
}

function parseOneArg(parsedArgument, argument) {
  parsedArgument[getArgumentName(argument)] = getArgumentValue(argument);
  return parsedArgument;
}

function getArgumentName(argument) {
  return argument[0];
}

function getArgumentValue(argument) {
  var param = argument.substring(2);
  if (!isNumber(param)) {
    return parseFloat(param);
  }
  return param || true;
}

function isNumber(string) {
  return Number.isNaN(parseFloat(string));
}

module.exports = parseArguments;
