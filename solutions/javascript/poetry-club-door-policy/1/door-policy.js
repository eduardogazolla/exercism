// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.
//
// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./door-policy.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Good luck with that door policy!

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
export function frontDoorResponse(line) {
  return line[0];
  // retorna a primeira letra da string, index [0];
}

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
export function frontDoorPassword(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
  // word[0] = pega a primeira letra da string e toUpperCase() faz essa letra ficar maiúscula;
  // word.slice(1) quebra a string a partir do index 1 da string, no caso a segunda letra;
  // toLowerCase() faz com que o resto da palavra cortada a partir do index 1 fique em letra minúscula;
}

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
export function backDoorResponse(line) {
  return line.trim().at(-1);
  // trim = remove todos os espaços em branco da string;
  // at(-1) pega o último caracter da string;
}

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
export function backDoorPassword(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase() + ', please';
  // word[0] = pega a primeira letra da string no index [0] e toUpperCase() faz essa letra ficar maiúscula;
  // word.slice(1) quebra a string a partir do index 1 da string, no caso a segunda letra;
  // toLowerCase() faz com que o resto da palavra cortada a partir do index 1 fique em letra minúscula;
  // + ', please' concatena essa string no final das outras string, ex: word = "Cavalo" : "Cavalo, please"
}
