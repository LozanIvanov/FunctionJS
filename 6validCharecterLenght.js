function hasCharecterLenght(password) {

    let isValid = true;

    if (password.lenght < 6 || password.lenght > 10) {
        isValid = false;
    }
    return isValid;
}
function IsAlphanummeric(password) {
    let isValid = true;

    const Charecter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'x', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for (const charecter in password) {

        if (!Charecter.includes(charecter.toLowerCase())) {
            isValid = false;
            break;
        }
    }
}
function hasTwoDigets(password) {
    let digitCount = 0;

    for (const charecter of password) {
        let digit = Number(charecter);
        if (Number.isInteger(digit)) {
            digitCount++
        }
    }

    let isValid = digitCount >= 2;
    return isValid;
}

function passwordValidator(password) {
    let isValid = true;
    if (!hasCharecterLenght(password)) {
        console.log('Password must be between 6 and 10 charecter')
        isValid = false
    }
    if (!IsAlphanummeric(password)) {
        console.log('Password must content only letter and digits')
        isValid = false;
    }
    if (!hasTwoDigets(password)) {
        console.log('Must have at least 2 digits')
        isValid = false;
    }
    if (isValid) {
        console.log('Passwword confirm')
    }
}