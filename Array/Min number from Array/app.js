// find minimum number from an array
const arr = [ 6, 9, 3, 11, 7, 12, 8, 4];

// Find first minimum
const findFirstMin = (arr) => {
    let min1 = arr[0];
    let i = 0;

    while(i < arr.length) {
        if(arr[i] < min1) {
            min1 = arr[i];
        }

        i++;
    }

    return max1;
}

// console.log(findFirstMin(arr), "      First min number");


// Find second minimum
const findSecondMin = (arr) => {
    let min1 = arr[0];
    let min2 = Infinity;
    let i = 0;

    while(i < arr.length) {
        if(arr[i] < min1) {
            min2 = min1;
            min1 = arr[i];
        }
        else if(arr[i] > min1 && arr[i] < min2) {
            min2 = arr[i];
        }

        i++;
    }

    return min2;
}

// console.log(findSecondMin(arr), "          Second min");



// Find third minimum
const findThirdMinimum = (arr) => {
    let min1 = arr[0];
    let min2 = Infinity;
    let min3 = Infinity;
    let i = 0;

    while(i < arr.length) {
        if(arr[i] < min1) {
            min3 = min2;
            min2 = min1;
            min1 = arr[i];
        }
        else if(arr[i] > min1 && arr[i] < min2) {
            min3 = min2;
            min2 = arr[i];
        }
        else if(arr[i] > min2 && arr[i] < min3) {
            min3 = arr[i];
        }

        i++;
    }

    return min3;
}

console.log(findThirdMinimum(arr), "            third minimum");

