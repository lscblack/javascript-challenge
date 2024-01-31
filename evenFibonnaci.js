function EvenFibonnaci(limit) {
    let sum = 0;
    let a = 1;
    let b = 2;

    while (b < limit) {
        if (b % 2 === 0) {
            sum += b;
        }

        const c = a + b;
        a = b;
        b = c;
    }

    return sum;
}

const result = EvenFibonnaci(4000000);
console.log(result);