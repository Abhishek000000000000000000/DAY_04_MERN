// Problem 1 solution - closures.js

const createCounter = () => {
    let count = 0;

    const increment = () => {
        count++;
        console.log('Count:', count);
    };

    const decrement = () => {
        count--;
        console.log('Count:', count);
    };

    return {
        increment,
        decrement
    };
};

// Usage
const counter = createCounter();
counter.increment(); // Output: Count: 1
counter.increment(); // Output: Count: 2
counter.decrement(); // Output: Count: 1
