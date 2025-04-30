// Write a function to find the sum of an array that contains mixed data types (numbers, strings, booleans) using a for loop

const arr=[1, 2, 3, 4, 5, "true", "false", "1", "2"];

const sumOfArray = (arr) => {
    let sum = 0;
    let i = 0;

    while(i < arr.length) {
        const num = Number(arr[i]);
        if(!isNaN(num)) {
            sum += num;
        }

        i++;
    }

    return sum;
}

// console.log(sumOfArray(arr));


// Alternate
const sumOfArrayAlternate = (arr) => {
    let sum = 0;
    let i = 0;

    while(i < arr.length) {
        if(typeof arr[i] === "number") {
            sum += arr[i];
        }
        else if(typeof arr[i] === "string") {
            if(arr[i] === "true" || arr[i] === "false") {
                if(arr[i] === "true") {
                    sum += 1;
                }
                else {
                    sum += 0;
                }
            }
            else {
                sum += Number(arr[i]);
            }
        }

        i++;
    }

    return sum;
}

console.log(sumOfArrayAlternate(arr), "            Alternate");
