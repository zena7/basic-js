const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(array) {
  if (!(array instanceof Array)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  }
  const operations = {
    "--double-prev": (acc, index, arr) => {
      if (index !== 0) {
        return acc.concat(arr[index - 1]);
      }

      return acc;
    },
    "--double-next": (acc, index, arr) => {
      if (index !== arr.length - 1) {
        return acc.concat(arr[index + 1]);
      }

      return acc;
    },
    "--discard-prev": (acc, index) => {
      if (index !== 0) {
        acc.splice(index - 1, 1);

        return acc;
      }

      return acc;
    },
    "--discard-next": (acc, index, arr) => {
      if (index !== arr.length - 1) {
        arr.splice(index + 1, 1);
      }

      return acc;
    }
  };

  return array.slice().reduce((acc, item, index, arr) => {
    if (operations[item]) {
      return operations[item](acc, index, arr);
    }

    return acc.concat(item);
  }, []);
}

module.exports = {
  transform
};
