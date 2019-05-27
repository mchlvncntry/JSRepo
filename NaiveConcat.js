

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
