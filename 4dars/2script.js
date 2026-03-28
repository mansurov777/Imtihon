class Kankulyator {
    qoshish(a, b) {
        return(a + b)
    }
     ayirish(a, b) {
        return(a - b)
    }
     kopaytirish(a, b) {
        return(a * b)
    }
     bolish(a, b) {
        return(a / b)
    }
}

let calc = new Kalkulyator();

console.log('Qoshish: ', calc.qoshish(10, 5));
console.log('Ayirish: ', calc.ayirish(10, 5));
console.log('Kopaytirish: ', calc.kopaytirish(10, 5));
console.log('Bolish: ', calc.bolish(10, 5));