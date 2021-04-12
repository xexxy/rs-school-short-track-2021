/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let currentChar = arr[0];
  let counter = 0;
  let result = '';

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === currentChar) {
      counter++;
    } else {
      if (counter === 1) {
        counter = '';
      }
      result += `${counter}${currentChar}`;
      currentChar = arr[i];
      counter = 1;
    }
  }

  return result;
}

module.exports = encodeLine;
