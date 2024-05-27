function Palindrome(num) {

    const str = num.toString();
    
    return str === str.split('').reverse().join('');
}

function checkPalindromes(arr) {
    
    let result=arr.map(Palindrome);
    console.log(result)
}


 checkPalindromes([123, 323, 421, 121])


