console.log(divideByTwo(6));

function divideByTwo(number) {  //always name function
    let result = number / 2;
    console.log(result);
}

divideByTwo(20)

divideByTwo(16)

divideByTwo(4)

divideByTwo(5)


function divideByTwo(myNumber) {
    let result = myNumber / 2;
    return result
}

let capitalize = function (myString) {
    return myString.toUpperCase()
}

console.log(capitalize("pippa"));  //parentesi tonde only when calling

//LAMBDA FUNCTION
let multiplyBytwo = (myNumber) => myNumber * 2 //recommended when only one line

function multiplyBy2(myNumber) {
    let result = myNumber * 2
    return result
}

let double = multiplyBy2

console.log(double(20));

let puppi = 8;
function writePuppi(params) {
    let puppi = "puppi"       //they don't conflict if it's in function
    console.log(puppi);
}

writePuppi();

console.log(puppi); //this calls the GLOBAL variable (which is 8)

function multiplyby4(firstnumber) {
    function multiplyBy2(secondnumber) {
        return secondnumber * 2
    }

    let result = multiplyBy2(multiplyBy2(firstnumber))  //first one called is inside (), then the one outside

    return result;

}
console.log(multiplyby4(2));


function fibonacci(number) {
    if (number === 0) {
        return 0;                        //return breaks function
    }
    if (number === 1) {
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2)
}

console.log(fibonacci(7));

//OPTIONAL PARAMS, UNDEFINED

function sum(primonumero, secondonumero) {
    return primonumero + secondonumero;
}

let risultato = sum();

function minus(primonumero, secondonumero) {
    if (secondonumero === undefined) {   //undefined second value returns that
        return -primonumero;
    } else {
        return primonumero - secondonumero;
    }
}

console.log(minus(20));


function multiplyby(numer1, numer2 = 2) {  //2 is set as a default value in case of undefined
    return numer1 * numer2;
}

console.log(multiplyby(7));


let variable = -4

let myfunction;

if (variable >= 0) {
    let multiplier = 2
    myfunction = function (numeroz) {
        return numeroz * multiplier;    //functions keep variables on, even after return(which normally breaks)
    }
} else {
    let multiplier = 3
    myfunction = function (numeroz) {
        return numeroz * multiplier;
    }
}

let resulz = myfunction(4)

console.log(resulz);