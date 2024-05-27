
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function divideFactorials(num1, num2) {

    let factorial1 = factorial(num1);
    let factorial2 = factorial(num2);
    
    
    let result = (factorial1 / factorial2).toFixed(2);
    
    console.log(result);
    
    
}

divideFactorials(5, 2); 
divideFactorials(6, 2); 
