const arr=[1, 12, 31, 41, 5, 90, 39];
const num = 29; // insert after 5 and 5 remain in array

// const insertNumber = (arr, num) => {
//     let i = 0;
//     let x = 5;
//     let tempArr = [];

//     while(i < arr.length) {
//         tempArr.push(arr[i]);

//         if(arr[i] === x) {
//             tempArr.push(num);
//         }

//         i++;
//     }

//     return tempArr;
// }

const insertNumberDifferent = (arr, num) => {
    let i = 0;
    let x = 5;
    let j = 0;
    let tempArr = [];

    while(i < arr.length) {
        tempArr[j] = arr[i];
        j++;

        if(arr[i] === x) {
            tempArr[j] = num;
            j++;
        }

        i++;
    }

    return tempArr;
}

console.log(insertNumberDifferent(arr, num));
