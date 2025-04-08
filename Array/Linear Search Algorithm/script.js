// const str = "abcd";

// const halfDivideString = (str) => {
//     // for(let i = 0; i<s)

//     let n = str.length;
//     let x = "";
//     let y = "";

//     for(let i=0; i<n; i++) {
//         if(i< n/2) {
//             x += str.charAt(i);
//         }
//         else if(i >= n/2) {
//             y += str.charAt(i);
//         }
//     }

//     console.log(x);
//     console.log(y);
// }

// halfDivideString(str);




// Linear Search Algorithm
let arr = [1, 2, 3, 4];
let x = 3;

const findLinearSearchAlgorithm = (arr, x) => {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === x) {
            return i;
        }
    }

    return -1;
}

console.log(findLinearSearchAlgorithm(arr, x));