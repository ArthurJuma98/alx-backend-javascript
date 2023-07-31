/**
 * Retrieves a map of grocery names and their quantity.
 * @author Arthur Ochilo <https://github.com/ArthurJuma98>
 * @returns {Map<string, Number>}
 */
export default function groceriesList() {
  const values = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  return new Map(values);
}
