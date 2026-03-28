function makeMultiplier(x) {
    return function(y) {
        return x * y;
    };
}

const double = makeMultiplier(2);
console.log(double(5)); 

const triple = makeMultiplier(3);
console.log(triple(4)); 