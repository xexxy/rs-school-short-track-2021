/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const arrS2 = s2.split('');

  s1.split('').forEach((item) => {
    const i = arrS2.indexOf(item);

    if (i >= 0) {
      arrS2.splice(i, 1);
      count++;
    }
  });

  return count;
}

module.exports = getCommonCharacterCount;
