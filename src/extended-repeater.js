const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let separator = options.separator || "+";
  let additionSeparator = options.additionSeparator || "|";
  let addition = options.addition;
  let additionStr = addition !== undefined ? options.addition : "";

  let newStr = ""
  for (let i = 1; i < options.additionRepeatTimes; i++) {
    newStr = `${newStr}${additionStr}${additionSeparator}`
  }

  newStr += additionStr

  let result = ""
  for (let i = 1; i < options.repeatTimes; i++) {
      result = `${result}${str}${newStr}${separator}`
  }

  result += `${str}${newStr}`
  
  return result
}

module.exports = {
  repeater
};
