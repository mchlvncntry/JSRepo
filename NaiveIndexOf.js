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
