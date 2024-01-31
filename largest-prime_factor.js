function largestPrimeFactor(n) {
    // Find the largest prime factor of n assuming that prime numbers start from 2
    let i = 2;
    while (i <= n) {
        // Check if i is a prime number
        if (n % i == 0) {
            // If i is a prime number, divide n by i
            n = n / i;
        } else {
            // If i is not a prime number, increment i
            i++;
        }
    }
    // Return the largest prime factor
    return i;
}

const result = largestPrimeFactor(600851475143);
console.log(result);