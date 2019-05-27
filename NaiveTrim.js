
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

