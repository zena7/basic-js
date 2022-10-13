const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function getSeason(date) {
  if (!date) {return "Unable to determine the time of year!"
    } else if (!(date instanceof Date)) {
      throw new Error("Invalid date!");
    } else if(Object.entries(date).length > 0){
    throw new Error("Invalid date!")
  }
 const seasons = new Map([
        [[11, 0, 1], "winter"],
        [[2, 3, 4], "spring"],
        [[5, 6, 7], "summer"],
        [[8, 9, 10], "autumn"]
      ]);
  for (let index of seasons.keys()) {
    if (index.includes(date.getMonth())) {

      return seasons.get(index);
    }
  }
}

module.exports = {
  getSeason
};
