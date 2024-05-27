function sumOddEven(input) {
    let oddSum = 0;
    let evenSum = 0;

    while (input > 0) {
        let lastDigit = input % 10;
        if (lastDigit % 2 === 0) {
            evenSum += lastDigit;
        }
        else {
            oddSum += lastDigit
        }
        input = Math.trunc(input / 10)
    }
    console.log(`EvenSum=${evenSum} OddSum=${oddSum}`)
}
sumOddEven(1000435)