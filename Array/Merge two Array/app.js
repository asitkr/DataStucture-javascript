let array1 = [1, 2, 3];
let array2 = [2, 3, 4];

// Merge to array
const mergeTwoArray = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let tempArr = [];

    while(i < arr1.length) {
        tempArr.push(arr1[i]);

        i++;
    }

    while(j < arr2.length) {
        tempArr.push(arr2[j]);

        j++;
    }

    return tempArr;
}

// console.log(mergeTwoArray(array1, array2));



// Alternate way to merge two array
const mergeTwoArrayAlternate = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let k = 0;
    let tempArr = [];

    while(i < arr1.length) {
        tempArr[k] = arr1[i]

        k++;
        i++;
    }

    while(j < arr2.length) {
        tempArr[k] = arr2[j]

        k++;
        j++;
    }

    return tempArr;
}

console.log(mergeTwoArrayAlternate(array1, array2));
