/**
* Adds two numbers and returns the result in poop emoji.
* @param {Number} a First number
* @param {Number} b Second number
*/
module.exports = function (a, b) {
  return Array.apply(null, Array(a + b)).map(
    function () {
      return ':joy_cat:';
    }
  ).join('');
};