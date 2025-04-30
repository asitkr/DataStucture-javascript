const arr = [1, 7, 3, 10, 29, 4, 9, 23];

// find 1st max
const findFirstMax = (arr) => {
    // let max1 = arr[0];
    let max1 = -Infinity;
    let i=0;

    while(i < arr.length) {
        if(arr[i] > max1) {
            max1 = arr[i];
        }

        i++;
    }

    return max1;
}

// console.log(findFirstMax(arr));


// find 2nd max
const findSecondMax = (arr) => {
    // let max1 = arr[0];
    let max1 = -Infinity;
    let max2 = -Infinity;
    let i = 0;

    while(i < arr.length) {
        if(arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        }
        else if(arr[i] > max2 && arr[i] < max1) {
            max2 = arr[i]
        }

        i++;
    }

    return max2;
}

// console.log(findSecondMax(arr), "          2nd max");


// find 3rd max
const findThirdMax = (arr) => {
    let max1 = arr[0];
    let max2 = -Infinity;
    let max3 = -Infinity;
    let i = 0;

    while(i < arr.length) {
        if(arr[i] > max1) {
            max3 = max2;
            max2 = max1;
            max1 = arr[i];
        }
        else if(arr[i] < max1 && arr[i] > max2) {
            max3 = max2;
            max2 = arr[i];
        }
        else if(arr[i] < max2 && arr[i] > max3) {
            max3 = arr[i];
        }

        i++;
    }

    return max3;
}

console.log(findThirdMax(arr), "         Third Max number");
