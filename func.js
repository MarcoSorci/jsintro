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


function multynumber(moltiplicatore) {
    return (number) => number * moltiplicatore
}

let moltiplicateims2 = multynumber(2);

let moltiplicateims3 = multynumber(3);

let moltiplicateims4 = multynumber(4);

console.log(moltiplicateims2(5));
console.log(moltiplicateims3(5));
console.log(moltiplicateims4(5));

function applicafunzionesunumero(mionumero, funzionedaapplicare) {
    return funzionedaapplicare(mionumero)
}

function dividiper2(numero) {
    return numero / 2;
}

function dividiper3(numero) {
    return numero / 3;
}

let res1 = applicafunzionesunumero(8, dividiper2)

console.log(res1);

let res2 = applicafunzionesunumero(8, dividiper3)

console.log(res2);

//ESERCIZIO 1

function min(num1, num2) {
    if (num1 < num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}
min(9, 6)

function min2(num1, num2) {
    (num1 < num2) ? console.log(num1) : console.log(num2)
}
min2(5, 7)

//ESERCIZIO 2

function isEven(number) {
    if (number === 0) {
        return true;               //return without value gives undefined already
    }
    if (number === 1) {
        return false;
    }
    if (number > 0) {
        return isEven(number - 2)  //it keeps removing/adding 2 until you get 0 or 1
    } else {
        return isEven(number + 2)
    }
    //return (number > 0) ? isEven(number - 2) : isEven(number + 2);
    //return isEven((number > 0) ? number - 2 : -number - 2);
    //
}


console.log(isEven(35));
console.log(isEven(50));
console.log(isEven(-4));


//ESERCIZIO 3

let stringz = "pippo"
console.log(stringz[stringz.length - 1]);

function countBs(str) {
    let Bcounter = 0
    let i = 0                   //limiter
    while (i < str.length) {    //while limiter is less than the length of the string
        if ((str[i] === "B") || (str[i] === "b")) {    //SQ BRACKETS MEAN "Nth LETTER OF", 
            //0th (value of i) letter of str, then 1st letter of str, then 2nd etc
            Bcounter++;
        }
        i++
    } return Bcounter
}

console.log(countBs("BabbBBC"));

// function countBs(str) {
//     let counter = 0
//     for (let i = 0; i <= str.length -1; i++) {
//         //let char = str[i];
//         if (str[i] === "B"){
//             counter++
//         }

//     }
//     return counter;
// }


function countChar(str, char, caseSensitive) {
    if (!caseSensitive) {
        str = str.toLowercase();
        char = char.toLowercase();
    }
    let counter = 0
    for (let j = 0; j <= str.length - 1; j++) {
        if (str[j] === char) {  //SQ BRACKETS MEAN "Nth LETTER OF", 
            //0th (value of j) letter of str, then 1st letter of str, then 2nd etc
            counter++
        }

    }
    return counter
}

console.log(countChar("kaKKkerlak", "k", true));

//Compito
//1)funzione non ricorsiva che scriva i primi 100 numeri della successione di fibonacci
//2)funzione fibonacci non ricorsiva
//3)funzione che dato un numero individui la sua posizione nella successione di fibonacci
//4)implementare con ricorsione la funzione fattoriale (5! = 5*4*3*2*1) (N! = N*(N-1))
console.log("Compito1"); //funzione non ricorsiva che scriva i primi 100 numeri della successione di fibonacci


let fib1 = 0, fib2 = 1, sumfib = 0, number = 101

function fib100() {
    for (let fibcounter = 0; fibcounter <= number; fibcounter++) {
        if (fibcounter === 0) {
            console.log(0);                //prints 0, then 1, then another 1 with sumfib
            continue;                      //same as return fib1
        }
        if (fibcounter === 1) {
            console.log(1);
            continue;
        }
        sumfib = fib1 + fib2;
        console.log(sumfib);
        fib1 = fib2              //the sum will need to shift the numbers, 0 + 1 = 1 becomes 1 + 1 = 2
        fib2 = sumfib
    }
}
fib100()

console.log("Compito2"); //funzione fibonacci non ricorsiva

let fib3 = 0, fib4 = 1, sumfib2;

function fibnonrecursive(number2) {
    for (let fibcounter3 = 1; fibcounter3 <= number2; fibcounter3++) {
        console.log(fib3);
        sumfib2 = fib3 + fib4;
        fib3 = fib4;
        fib4 = sumfib2;
    }
}
console.log(fibnonrecursive(10));


console.log('Compito3'); //funzione che dato un numero individui la sua posizione nella successione di fibonacci

let fib_2 = 0, fib_1 = 1, position = 2, sumfib3

function fibcall(numb) {
    if (numb === 0) {
        return 0;
    }
    if (numb === 1) {
        return 1;
    }
    while (true) {
        sumfib3 = fib_1 + fib_2
        if (sumfib3 === numb) {
            return position;
        }
        if (sumfib3 > numb) {
            return;                   //returns undefined
        }
        position++;
        fib_2 = fib_1;
        fib_1 = sumfib3;
    }
}

console.log(fibcall(21));



console.log('Compito4'); //implementare con ricorsione la funzione fattoriale (5! = 5*4*3*2*1) (N! = N*(N-1)!)

function factorial(number) {
    if (number === 0)
        return 1;
    else {
        return number * factorial(number - 1);
    }
}

console.log(factorial(3));
