function perfectNumber(num) {
    let isperfect=true;
    
    if (num <= 1) {
        return `${num} is not a positive`;
    }
    let digits=[];
    let sum = 0;
    for (let i = 1; i <= Math.floor(num / 2); i++) {
        if (num % i === 0) {
            sum += i;
            digits.push(i)
        }
    }

    if (sum !== num)  {
    isperfect=false;
    }
    
    if(isperfect){
        console.log(`Perfect number: ${digits.join(' + ')}`);
    }
    else{
        console.log("It is not a perfect number!")
    }
}

perfectNumber(28);  
