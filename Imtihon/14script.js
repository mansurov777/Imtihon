const numbers = [3, 7, 2, 9, 4, 10, 1];
let max = numbers[0];

for (const num of numbers) {
    if (num > max) {
        max = num;
    }
}

console.log(max); 