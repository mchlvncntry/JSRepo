
/*
 Write a function that splits the receiving string parameter into an array of strings
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


