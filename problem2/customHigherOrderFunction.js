// Problem 2 solution - customHigherOrderFunction.js

const customMap = (arr, callback) => {
    const mappedArr = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArr.push(callback(arr[i], i, arr));
    }
    return mappedArr;
};

// Usage
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = customMap(numbers, (num) => num * num);
console.log('Squared Numbers:', squaredNumbers); 
