let arr = [1, 2, 3, 10, 2, 5, 3, 1];

// Remove duplicate from an array
const removeDuplicateElement = (arr) => {
    return    [...new Set([...arr])]
}

// console.log(removeDuplicateElement(arr));


// Alternate Brute force approach
const removeDuplicateElementAlternate = (arr) => {
    let tempArr = [];
    let k = 0;
    
    for(let i=0; i<arr.length; i++) {
        let isDuplicate = false;
        for(let j=0; j<k; j++) {
            if(arr[i] === tempArr[j]) {
                isDuplicate = true;
                break;
            }
        }
        
        if(!isDuplicate) {
            tempArr.push(arr[i]);
            k++;
        }
    }

    return tempArr;
}

console.log(removeDuplicateElementAlternate(arr));