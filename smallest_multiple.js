function smallestMutiple() {
    //We start counting from 20 because the multiple must be divisible by 20
    let number = 20;

    while (true) {
        let divisible = true;
        //We check if the number is divisible by 20

        for (let i = 2; i <= 20; i++) {
            if (number % i !== 0) {
                divisible = false;
                break;
            }
            
        }
        if (divisible) {
            return number;
        }
        number += 20; //We add 20 to the number
    }
}

const result = smallestMutiple(); 
console.log(result);
