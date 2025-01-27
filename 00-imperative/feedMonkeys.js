// const MONKEYS = ["🐒", "🦍", "🦧"];

/**
 * Given 'MONKEYS' array, define function 'feedMonkeys' to return an array where each monkey has one fruit
 * use for() instruction
 *
 */

/**
 * Feeds monkeys with the specified fruit.
 *
 * @param {string[]} monkeysList - An array of monkey names.
 * @param {string} fruit - The type of fruit to feed the monkeys.
 * @returns {string[]} An array of strings indicating each monkey has been fed with the specified fruit.
 */

export default function feedMonkeys(monkeysList, fruit) {
  const newMonkeysList = [];
  const monkeysListLength = monkeysList.length;
  const fruitColletion = ["🍎", "🍌", "🍇", "🍉🍇"];

  if (!fruitColletion.includes(fruit)) {
    return [];
  }

  for (let monkeyIndex = 0; monkeyIndex < monkeysListLength; monkeyIndex++) {
    const feedMonkey = `${monkeysList[monkeyIndex]} ${fruit}`;

    newMonkeysList.push(feedMonkey);
  }

  return newMonkeysList;
}
