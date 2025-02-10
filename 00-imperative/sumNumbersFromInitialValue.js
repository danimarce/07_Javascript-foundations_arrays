/**
 * Given 'NUMBERS' array, define function 'sumNumbersFromInitialValue' to return its sum value depending on initial value.
 * use for() instruction
 *
 */

/**
 * Sums the numbers in the given array starting from the initial accumulated value.
 *
 * @param {number[]} numbersList - The list of numbers to sum.
 * @param {number} initialAccumulatedValue - The initial value to start the sum from.
 * @returns {number} The sum of the numbers in the array starting from the initial value.
 */
export default function sumNumbersFromInitialValue(
  numbersList,
  initialAccumulatedValue,
) {
  const numbersListLength = numbersList.length;

  for (let numberIndex = 0; numberIndex < numbersListLength; numberIndex++) {
    const number = numbersList[numberIndex];

    initialAccumulatedValue += number;
  }

  return initialAccumulatedValue;
}
