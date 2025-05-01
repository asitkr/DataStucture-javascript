let array1 = [1, 2, 3];
let array2 = [2, 3, 4];

const mergeRemoveDuplicate = (arr1, arr2) => {
    return [...new Set([...arr1, ...arr2])];
}

const result1 = mergeRemoveDuplicate(array1, array2);
// console.log(result1);


// Alternate
const mergeRemoveDuplicateAlternate = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let k = 0;
    let tempArr = [];

    while(i < arr1.length) {
        tempArr.push(arr1[i]);

        i++;
    }

    while(j < arr2.length) {
        let isDuplicate = false;
        for(let m=0; m<k; m++) {
            if(arr2[j] === tempArr[m]) {
                isDuplicate = true;
                break;
            }
        }

        if(!isDuplicate) {
            tempArr.push(arr2[j]);
            k++;
        }

        j++;
    }

    return tempArr;
}

const result2 = mergeRemoveDuplicateAlternate(array1, array2);
console.log(result2);
