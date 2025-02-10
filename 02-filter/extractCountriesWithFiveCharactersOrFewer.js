// const COUNTRIES = ["United Kingdom", "Italy", "France", "Portugal", "Greece"];

/**
 * Given COUNTRIES array, define function 'extractCountriesWithFiveCharactersOrFewer' return a new array that only includes those countries that are 5 characters or fewer in length.
 *
 * expected: [ 'Italy' ]
 */

/**
 * Extracts countries with names that have five characters or fewer.
 *
 * @param {string[]} countriesList - An array of country names.
 * @returns {string[]} An array of country names that have five characters or fewer.
 */

export default function extractCountriesWithFiveCharactersOrFewer(
  countriesList,
) {
  const filteredCountries = countriesList.filter((countrie) => {
    return countrie.length <= 5;
  });

  return filteredCountries;
}
