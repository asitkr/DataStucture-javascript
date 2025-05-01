let arr = [1, 2, 3, 10, 2, 5, 3, 1];

// Remove duplicate from an array
const removeDuplicateElement = (arr) => {
    return    [...new Set([...arr])]
}

console.log(removeDuplicateElement(arr))