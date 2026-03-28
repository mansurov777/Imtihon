for (let i = 2; i <= 100; i++) {
    let tub = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            tub = false;
            break;
        }
    }

    if (tub) {
        console.log(i);
    }
}