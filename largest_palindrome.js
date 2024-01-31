function PalindromeNumber(number) {
    // Convert the number to a string
    const strNumber = String(number);
    // Reverse the string
    const reverseStr = strNumber.split('').reverse().join('');
    return strNumber === reverseStr;
}

function largestPolindromeProduct() {
    let largestPalindrome = 0;

    // Loop through numbers from 999 to 100
    for (let i = 999; i >= 100; i--) {
        // Loop through numbers from 999 to 100
        for (let j = 999; j >= 100; j--) {
            const product = i * j;
            // Check if the product is a palindrome
            if (PalindromeNumber(product) && product > largestPalindrome) {
                largestPalindrome = product;
            }
        }
    }
    return largestPalindrome;
}
//Call the function
const result = largestPolindromeProduct();
//Print the result
console.log(result);