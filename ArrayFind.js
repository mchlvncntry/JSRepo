// Function that accepts an array and a number as parameters.
// The function shall return the element larger than the number parameter.
// If no element greater than the search value is found, function shall return the value of the search value.
let customArrayFindVersionOne = (array, compareValue) => {

    let greaterValue = compareValue; // if no value found greater than compareValue, return -1
    let found = false;

    for (let i = 1, length = array.length; i <= length && !found; i++) {
        if (array[i] > compareValue) {
            greaterValue = array[i];
            found = true;
        }
    }
    return greaterValue;
};

// FIRST FUNCTION, VERSION 2
let customArrayFindVersionTwo = (array, compareValue) => {

    let greaterValue = compareValue; // if no value found greater than compareValue, return compareValue
    let found = false;

    for (let element of array) {
        if (element > compareValue && !found) {
            greaterValue = element;
            found = true;
        }
    }
    return greaterValue;
};

let customArrayFindVersionThree = (array, compareValue) => {
    let greaterValue = compareValue;
    let index = 0;
    let length = array.length;
    let found = false;

    while (index < length && !found) {
        if (array[index] > compareValue) {
            greaterValue = array[index];
            found = true;
        }
        index++;
    }
    return greaterValue;
};

// Tests for FIRST FUNCTION
console.log(customArrayFindVersionOne([5,15,40],41)); // returns -1 since value is not found!
console.log(customArrayFindVersionTwo([5,40,15], 15)); // returns 40, since 40 > 15
console.log(customArrayFindVersionTwo([1,2,3,4,66,77,14,5],1));
console.log(customArrayFindVersionThree([5,15,40], 5));
console.log(customArrayFindVersionTwo([10,12,14,18,56,90,900,1000],0));


// Write a naive version of the indexOf method.
let customIndexOf = (str, searchChar, fromIndex) => {

    let found = false; // this will make the method efficient!

    for (let i = fromIndex, length = str.length; i < length && !found; i++) {
        if (str[i] === searchChar) {
            return i; // returns the position of the first occurrence of searchChr
        }
    }

    return -1;
};

// Tests
console.log(customIndexOf('vince','n',3)); // returns -1 since no n is found from index 3 till end of String
console.log(customIndexOf('ccccat','c',0)); // returns 0 since c was found on index 0 and index 0 is within the range of the fromIndex

/*
 Write a function which splits the receiving string parameter into an array of strings
 by separating the string into substrings and return the array.
 function (stringToSplit, separator)
 Example (‘a|b|c’, ‘|’ return [‘a’,’b’,’c’],
 (bcAbd, ‘A’, return [‘bc’, ‘bd’],
 (bacd, ‘X’ return [‘b’,’a’,’c’,’d’])
 (similar to built-in function split)
 */

function customSplit(stringToSplit, separator) {
    let output = [];
    let currentIndex = 0;
    let startIndex = 0;

    for (let i = 0; i < stringToSplit.length; i++) {
        if (stringToSplit[i] === separator) {
            output[currentIndex] = "";
            for (let j = startIndex; j < i; j++) {
                output[currentIndex] += stringToSplit[j];
            }
            startIndex = i + 1;
            currentIndex++;
        }
    }
    output[currentIndex] = "";
    for (let k = startIndex; k < stringToSplit.length; k++) {
        output[currentIndex] += stringToSplit[k];
    }

    return output;
}
// TESTS customSplit() function
console.log("VNCE " + customSplit('bcAbd','')); // prints [ 'bc', 'bd' ]
console.log(customSplit('a|b|c','|')); // prints [ 'a', 'b', 'c' ]
console.log(customSplit('bacd','X')); // prints [ 'bacd' ]

// Write a naive version of the concat() method.
let customConcat = (firstArray, secondArray) => {
    let tempArray = [];

    // "Merge" the 2 arrays!
    for (let i = 0, length = firstArray.length; i < length; i++) {
        tempArray[i] = firstArray[i];
    }
    for (let i = 0, length = secondArray.length; i < length; i++) {
        tempArray[i+firstArray.length] = secondArray[i];
    }
    // End merging

    let newArray = [];
    let uniques = tempArray.length;

    for(let i = 0; i < uniques; i++) {
        for (let j = i+1; j < uniques; j++) {
            if(tempArray[i] === tempArray[j]) { // if adjacent elements are equal/same
                tempArray[j] = tempArray[uniques-1]; // replace duplicate element with last unique element
                uniques--;
                j--;
            }
        }
    }

    // Copy array (without duplicates!) to newArray
    // At this point, duplicate elements in tempArray[] have been removed!
    for (let i = 0; i < uniques; i++) {
        newArray[i] = tempArray[i];
    }

    return newArray;
};

console.log(customConcat(['a','b','c','d'],[1,2,3]));
console.log(customConcat([1,2,3,99,99,99,99],[2,4]));
console.log(customConcat(['a','b'],['b','c']));

// Write a naive version of the trim() method.
function omitAllWhitespaces(word) {
    let newWord = "";

    for (let letter of word) {
        if (letter !== " " && letter !== "\n" && letter !== "\t") {
            newWord += letter;
        }
    }
    return newWord;
}

// Removes all manner of whitespaces on the right of the string
let omitRightWhitespaces = (word) => {
    let newWord = "";

    let i = word.length-1;
    while (i >= 0 && word[i] === " " || word[i] === "\t" || word[i] === "\n") {
        i--;
    }
    // Manual "substring" implementation below
    let limit = 0;
    for (let m = 0, length = word.length; m <= i && limit < length; m++) {
        newWord += word[m];
        limit++;
    }
    return newWord;
}

// Removes all manner of whitespaces on the left of the string
let omitLeftWhitespaces = (word) => {
    let newWord = "";
    let j = 0;
    while (j < word.length && word[j] === " " || word[j] === "\t" || word[j] === "\n") {
        j++;
    }
    // Manual "substring" implementation below
    let limit = j;
    for (let m = j, length = word.length; m >= j && limit < length; m++) {
        newWord += word[m];
        limit++;
    }
    return newWord;
}

// Removes all manner of whitespaces on the left and right of the string, not in between!
let omitRightAndLeftWhitespaces = (word) => {

    let newWord ="";

    // Delete whitespace on right!
    let i = word.length-1;
    while (i >= 0 && word[i] === " " || word[i] === "\t" || word[i] === "\n") {
        i--;
    }

    // Delete whitespaces on left
    let j = 0;
    while (j < word.length && word[j] === " " || word[j] === "\t" || word[j] === "\n") {
        j++;
    }

    // Manual implementation of 'substring' using the j and i indices obtained from the while loops above.
    let limit = j;
    for (let k = j, length = word.length; k <= i && limit < length; k++) {
        newWord += word[k];
        limit++;
    }
    return newWord;
}

console.log(omitRightAndLeftWhitespaces('\t\t   javascript is fun!\t\t'));
// Output is: javascript is fun!

console.log(omitLeftWhitespaces('       \t\t\t\t\t\t\t\t\    angelo '));

let add = (someNumber) => someNumber + 2;
console.log(add(4));
