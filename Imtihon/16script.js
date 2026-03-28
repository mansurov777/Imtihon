const fruits = ["apple", "banana", "apple", "cherry", "banana", "apple"];
const countMap = new Map();

fruits.forEach(fruit => {
    countMap.set(fruit, (countMap.get(fruit) || 0) + 1);
});

console.log(countMap);