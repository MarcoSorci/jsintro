//console.log(); e8=*10all'ottava, NaN=not a number, ALT+96=backtick=` for running things inside string,
//[number] after string for picking letter from string, boolean means true/false, != means different, <= means less or equal.
//! not, && and,|| or, null=undefined=0
//false is 0, true is 1
//prompt("Hewwo wowd"); for prompt text box (like the ones in credential requirements)
//true?1:2 if true picks 1, if false picks 2

let number = 5 //reusable with new values, 
//defines first the variable, so it must be used before using it (can do it with var though, for now only use let instead of var)
console.log("assegnaz1", number);

number = 7
console.log("assegnaz2", number);

const costanza = 12 //can's use it with other values
console.log("assegnaz3", costanza);

//costanza=15
//console.log("const call", costanza);

var numbah2 = 27
console.log("log var", numbah2);

numbah2 = 1224
console.log("log var2", numbah2);

let poo = "mycooch"
console.log(poo);

let poo0, pooo, poooo;
let operazione = 5 + 6;

console.log("log operazione", operazione);

// if (operazione>12) {
//     console.log("I came from if");
// } else {
//     console.log("I didn't come from if");
// }

if ((operazione < 10) || (operazione !== 11)) {
    console.log("I came from if");
} else {
    console.log("I didn't come from if");
}

let numero = 0
if (numero > 0) {
    console.log("positivo");
} else if (numero === 0) {
    console.log("uguale a 0");
} else {
    console.log("negativo");
}

let numero4 = 16
if (numero4 > 20) { //conditions should be ordered FROM the most restrictive TO the least
    console.log("maggiore di 20");
} else if (numero4 > 10) {
    console.log("maggiore di 10");
} else if (numero4 >= 0) {
    console.log("maggiore uguale di 0");
} else {
    console.log("minore di 0");
}

let numero5 = 12

if (numero5 % 2 === 0) {
    console.log("divisibile x 2"); //if there's only one line after "if", you can avoid {}, not recommended
} else if (numero5 % 3 === 0) {
    console.log("divisibile x 3");
}

console.log("WHILE");
let i = 0
while (i < 10) {  //this creates all numbers up to the condition, CAREFUL IT CAN SCREW THINGS UP IF NOT LIMITED
    console.log(i);
    i = i + 1
}
console.log("DOWHILE");
let j = 0
do {   //the "dowhile" does "do" earlier than "while"
    console.log(j);
    j++;
} while (j < 10);

console.log("FOR");
for (let k = 0; k < 10; k++) {
    console.log(k);

}
//k++ is the same as k=k+1
//idem con patate per il --
//can use k+=2 to add 2 or any other number, same for k-=2


let y = 10;

while (true) {
    if (y % 7 === 0) {
        console.log(y);
        break
    }
    y++;
}

for (let m = 0; m <= 100; m++) {
    if (m === 0);
    continue;
}

for (let hash = "#"; hash < "########"; hash += "#") {
    console.log(hash);
}

for (let indexx = 0; indexx <= 100; indexx++) {

    let str = "";
    if (indexx % 3 === 0) {
        str += "Fizz"
    }

    if (indexx % 5 === 0){
        str += "Buzz"
    }
        
    console.log(str.length > 0 ? str : indexx);
}

//ESERCIZIO
let grid = ""

for (let indexxx = 0; indexxx < 8; indexxx++) {
    for (let jizz = 0; jizz < 8; jizz++) {
        grid += "#"
    }
    grid+="\n"
}

console.log(grid);


