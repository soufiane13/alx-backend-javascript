/**
 * Utility object with calculation methods.
 */
const Utils = {
  /**
   * Performs a calculation based on the specified type.
   * Rounds the input numbers before performing the operation.
   * 
   * @param {string} type - The type of calculation ('SUM', 'SUBTRACT', 'DIVIDE').
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @returns {number|string} The result of the calculation, or 'Error' if dividing by zero.
   */
  calculateNumber(type, a, b) {
    if (type === 'SUM') {
      // Returns the sum of two rounded numbers
      return Math.round(a) + Math.round(b);
    }
    if (type === 'SUBTRACT') {
      // Returns the difference between two rounded numbers
      return Math.round(a) - Math.round(b);
    }
    if (type === 'DIVIDE') {
      // Returns the quotient of two rounded numbers, or 'Error' if division by zero
      return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
    }
    // Default return value if an unsupported calculation type is provided
    return 0;
  },
};

// Exports the Utils object for use in other modules
module.exports = Utils;
