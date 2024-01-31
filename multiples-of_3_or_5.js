
//Function to get the sum of multiples of 3 and 5 in a range from 0 to 1000
function MultiplesOfThreeAndFive() {

    //Get the sum of multiples of 3 and 5 in a range from 0 to 1000
    let sum = 0;
    for (let i = 0; i < 1000; i++) {

        //Check if i is a multiple of 3 or 5
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    //Return the sum
    return sum;
}
//Call the function
const result = MultiplesOfThreeAndFive(1000);
//Print the result
console.log(result);