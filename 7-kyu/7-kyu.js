function getAVG(arrayOfNumbers) {
  if (!Array.isArray(arrayOfNumbers)) {
    return 0;
  }
  if (arrayOfNumbers.length === 0) {
    return 0;
  }

  let avg;
  let sumNumbers = 0;
  let countNumbers = 0;

  for (const number of arrayOfNumbers) {
    if (typeof number === "number") {
      sumNumbers += number;

      countNumbers++;
    }
  }
  avg = sumNumbers / countNumbers;
  return avg;
}

function replaceVocalWithPosition(phrase) {
  if (typeof phrase !== "string") {
    return null;
  }
  const vocals = ["a", "e", "i", "o", "u"];

  let phraseFormated = "";

  for (let i = 0; i < phrase.length; i++) {
    if (vocals.includes(phrase[i].toLowerCase())) {
      phraseFormated += i + 1;
    } else {
      phraseFormated += phrase[i];
    }
  }

  return phraseFormated;
}

function convertArrayStringsToArrayNumbers(arrayOfStrings) {
  if (!Array.isArray(arrayOfStrings)) {
    return [0];
  }
  const arrayOfNumbers = [];
  for (const string of arrayOfStrings) {
    let number = 0;
    if (typeof string === "string") {
      const numberOfString = parseInt(string);
      if (!isNaN(numberOfString)) {
        number = numberOfString;
      }
    }
    arrayOfNumbers.push(number);
  }
  return arrayOfNumbers;
}

function removeValues(array1, array2) {
  if (!Array.isArray(array1)) {
    return [];
  }
  if (!Array.isArray(array2)) {
    return array1;
  }
  const array = [];
  for (const element of array1) {
    if (!array2.includes(element)) {
      array.push(element);
    }
  }
  return array;
}


function findDuplicates(array) {
  if (!Array.isArray(array)) {
    let emptyArray = [];
    return emptyArray;
  }
  const uniqueItems = [];
  const duplicatedItems = [];
  array.forEach((element) => {
    if (!uniqueItems.includes(element)) {
      uniqueItems.push(element);
    } else if (!duplicatedItems.includes(element)) {
      duplicatedItems.push(element);
    }
  });
  return duplicatedItems;
}

function convertNumberToStringWords(number) {
  if (typeof number !== "number") {
    return "";
  }
  const numbersInString = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const prefixNeg = "neg";
  let numberToString = "";
  if (number < 0) {
    numberToString += `${prefixNeg}.`;
    number = Math.abs(number);
  }
  const digits = String(number).split("");
  const digitsToString = [];
  for (const digit of digits) {
    digitsToString.push(numbersInString[digit]);
  }
  numberToString += digitsToString.join(".");
  return numberToString;
}

module.exports = {
  getAVG,
  replaceVocalWithPosition,
  convertArrayStringsToArrayNumbers,
  removeValues,
  buildArray,
  findDuplicates,
  convertNumberToStringWords,
};
