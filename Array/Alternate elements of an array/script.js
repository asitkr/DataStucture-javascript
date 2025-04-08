let arr = [10, 20, 30, 40, 50];

const printAlterNateElement = (arr) => {
    let tempEven = [];
    let tempOdd = [];
    for(let i=0; i<arr.length; i++) {
        if(i%2 === 0) {
            tempEven.push(arr[i]);
        }
        else if(i%2 !== 2) {
            tempOdd.push(arr[i]);
        }
    }

    console.log("Even place alternate ", tempEven.join(", "));
    console.log("Odd place alternate ", tempOdd.join(", "));
}

printAlterNateElement(arr);