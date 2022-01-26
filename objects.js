//objects are key-value association, key is always a string, value can be anything even another object/array
let point = { x: 2, y: 3 } //[]arrays, {}objects

let student1 = { name: "tizio", surname: "caio", yob: 1580, married: false }

let student2 = { name: "tizia", surname: "caia", yob: 2444, married: false }

let classe = { name: "programmazione frontend", students: [student1, student2] }

let andrea = { name: "Andrea", surname: "Asioli", "class di cui è docente": classe /*this last one is another object*/ }

console.log(andrea.surname); //with keyword you can filter
console.log(andrea["class di cui è docente"]); //other spelling, key is in quotes if the name needs spaces or special characters

let nomestudente1 = student1.name
console.log(nomestudente1);

student1.name = "poop"
console.log(student1);

console.log(student1.titolodistudio);
student1.titolodistudio = "Diploma di maturità"; //added new key value assoc
console.log(student1);

for (const key in student1) {
    if (Object.hasOwnProperty.call(student1, key)) {   //makes sure they actually exist
        const element = student1[key];
        console.log(key + ": " + element);
    }
}

console.log(JSON.stringify(andrea));  //turns it into json


let objectinstring = '{"name":"Andrea","surname":"Asioli","class di cui è docente":{"name":"programmazione frontend","students":[{"name":"poop","surname":"caio","yob":1580,"married":false,"titolodistudio":"Diploma di maturità"},{"name":"tizia","surname":"caia","yob":2444,"married":false}]}}'

let andreacopy = JSON.parse(objectinstring)  //turns it into js

console.log(andreacopy);

function calcolatriangolorettangolo(catetomaggiore, catetominore, ipotenusa) {
    let per = catetomaggiore + catetominore + ipotenusa;
    let ar = (catetomaggiore * catetominore)/2
    return{perimetro: per, area: ar}
}
let dimensionitriangolo = calcolatriangolorettangolo(4, 3, 5)

console.log("il triangolo ha il perimetro di: " + dimensionitriangolo.perimetro + " e l'area: " + dimensionitriangolo.area);


let firstnumber = 5
 
function addone() {                       //così viene modificato, se usi number no perchè crea new one
    firstnumber = firstnumber + 1;
    return firstnumber;
}

let secondnumber = addone(firstnumber);

console.log(firstnumber);
console.log(secondnumber);


//let myaccount = {name: "Tizio Caio", balance: 100}

function addmoney(moneytoadd, account) {
    // let tempaccount = {};
    // tempaccount = Object.assign(tempaccount, account)  //first to copy in, second to copy from
    let tempaccount = {...account};  //same as above, = {...{name: "Tizio Caio", balance: 100}}
    //account is myaccount thanks to line updatedaccount

    tempaccount.balance = tempaccount.balance + moneytoadd;
    // account.balance = account.balance + moneytoadd;
    // return account
    return tempaccount;
}

//let updatedaccount = addmoney(50, myaccount)

//console.log(myaccount);   //when object is edited the reference is edited as well, if not wanted needs clone
//console.log(updatedaccount);


let usertizio = {name: "Tizio Caio", age: 43}
let myaccount = {user: usertizio, balance: 50}

/*
function changeage(newage, account) {
    let tempaccount = JSON.parse(JSON.stringify(account)); //DEEP COPY, copied to a single string with the json stringify, then returned to object with parse
    tempaccount.user.age = newage;
    return tempaccount;
}

let updatedaccount = changeage(50, myaccount)

console.log(updatedaccount); 
console.log(myaccount);            //even a shallow copy overwrites
*/

function changeage(newage, account) {
    account.user.age = newage
}

changeage(50, myaccount)
console.log(myaccount);

let student = {name: "tizio", surname: "caio", age: 69}
console.log(Object.keys(student));

for (const key in student) {                           //forin
    if (Object.hasOwnProperty.call(student, key)) {
        const element = student[key];
        console.log(element);
    }
}

for (const key of Object.keys(student)) {              //forof
    if (Object.hasOwnProperty.call(student, key)) {
        const element = student[key];
        console.log(element);
    }
}

for (let i = 0; i < Object.keys(student).length; i++) {  //for
    const key = Object.keys(student)[i];
    if (Object.hasOwnProperty.call(student, key)) {
        const element = student[key];
        console.log(element);
    }
}


let poo = {name: 'poo', city: 'pooptown'}

let poo1 = poo

let poo2 = {name: 'poo', city: 'pooptown'}

console.log(poo === poo2);  //they're not equal because it's only linking to reference, not copying

const age = 5;

const name1 = "oswald"

let baby = {age, name: name1} //can omit x: y by defining earlier

console.log(baby);

//linked list, deep comparison