function getHelloWorld() {
  return "Hello World";
}

function getStringByCondition(condition) {
  if (condition) {
    return "La condición es verdadera";
  } else {
    return "La condición es falsa";
  }
}

function addKataToInput(sentence) {
  return `${sentence} kata`;
}

function basicCalculator(number1, number2, operation) {
  switch (operation) {
    case "+":
      return number1 + number2;
      break;
    case "-":
      return number1 - number2;
      break;
    case "/":
      return number1 / number2;
      break;
    case "*":
      return number1 * number2;
      break;
  }
}

function negativeNumber(number) {
  if (typeof number !== "number") {
    return null;
  }
  if (number < 0) {
    return number;
  }
  return number * -1;
}

function basicCalculatorWithValidation(number1, number2, operation) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    return null;
  }
  if (
    operation !== "+" &&
    operation !== "-" &&
    operation !== "/" &&
    operation !== "*"
  ) {
    return null;
  }
  return basicCalculator(number1, number2, operation);
}

function sumNumbersInArray(array) {
  let result = 0;

  if (!Array.isArray(array)) {
    return result;
  }

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      result += array[i];
    }
  }
  return result;
}

function countNegativeNumbersInArray(array) {
  if (!Array.isArray(array)) {
    return 0;
  }
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && array[i] < 0) {
      result += 1;
    }
  }
  return result;
}

function converToEuro(price) {
    let priceConvertToString = Number.parseFloat(price).toFixed(2);
    if (typeof price !== "number") {
      return "0.00€";
    }
    return priceConvertToString + "€";
}

function abbreviateWords(word1, word2) {
  if (word1 === '' 
    || typeof word1 !== 'string' 
    || word2 === ''
    || typeof word2 !== 'string') {
       return null;
    }
  return `${word1[0]}.${word2[0]}`
} 

function filterByWord(phrase, word) {
  if (typeof phrase !== "string" || typeof word !== "string") {
    return null;
  }

  return phrase.split(word).join("");
}

function reverse(word) {
  if (typeof word !== "string") {
    return null;
  }

  // Versión corta

  return word.split("").reverse().join("");
}

function isAllUpperCase(word) {
  if (typeof word !== "string") {
    return false;
  }
  
  return word === word.toUpperCase();
}

function isPalindrome(word) {
  if (typeof word !== 'string') {
    return false;
  }
  const wordReverse = reverse(word);
  if (word.toLowerCase() === wordReverse.toLowerCase()) {
    return true;
  }
  return false;
}

function filterAndReverse(phrase, filter, bool) {
  if (typeof phrase !== 'string') {
    return null;
  }
  if (typeof filter !== 'string') {
    return null;
  } 
    if (typeof bool !== 'boolean') {
      return null;
    }
  const phraseFilter = filterByWord(phrase, filter);
  if (bool === true) {
    return reverse(phraseFilter);
  }
  return phraseFilter;
}

function repeatWord(word, number) {
if (typeof word !== 'string' 
|| typeof number !== 'number') {
  return null;
}
  let repeatWord = '';
  for (let i = 0; i < number; i++) {
    repeatWord += word;
  }
  return repeatWord;
}

function replaceWordInSentence(phrase, patron, word) {
  if (typeof word !== 'string'
  || typeof patron !== 'string'
  || typeof phrase !== 'string') {
    return null;
  }
  if (patron === '') {
    return phrase;
  }
  let replacePhrase = phrase.replace(patron, word);
  return replacePhrase
}

function sumNumbersToFinalNumber(number){
  let numberPlus = 0;
  for (let i = 1; i <= number; i++) {
    numberPlus += i;
  }
  return numberPlus; 
}

function largestExpression(a, b, c){
if (typeof a !== 'number' 
|| typeof b !== 'number'
|| typeof c !== 'number') {
  return null;
}
  let max = -Infinity;

  const operations = [
  a * (b + c),
  a * b * c,
  a + b * c,
  (a + b) * c,
  a * b + c,
  a + b + c,
  ];
  return Math.max(...operations);
}

module.exports = {
  getHelloWorld,
  getStringByCondition,
  addKataToInput,
  basicCalculator,
  negativeNumber,
  basicCalculatorWithValidation,
  sumNumbersInArray,
  countNegativeNumbersInArray,
  converToEuro,
  abbreviateWords,
  filterByWord,
  reverse,
  isAllUpperCase,
  isPalindrome,
  filterAndReverse,
  repeatWord,
  replaceWordInSentence,
  sumNumbersToFinalNumber,
  largestExpression,
};
