const arr = [5, 1, 3, 2, 6];


// Map method
const double = (x) => {
    return x * 2;
}

const result1 = arr.map(double);
console.log(result1);

const threeTimes = (x) => {
    return x * 3;
}

const result2 = arr.map(threeTimes);
console.log(result2);


const binary = (x) => {
    return x.toString(2);
}

const result3 = arr.map(binary);
console.log(result3);



// Filter method
// Element is greater than 4
const filterValueGreaterThanFour = (x) => {
    return x > 4
}

const result4 = arr.filter(filterValueGreaterThanFour);
console.log(result4);



// Reduce method
const result5 = arr.reduce((acc, curr) => acc + curr);
console.log(result5);
