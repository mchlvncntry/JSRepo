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

