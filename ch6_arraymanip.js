/*
1) obj student {name, surname, age, sex}
array students
function filterage(age) creates array with all elements with that age
function filtersex(sex) 
function filter(nomeproprietà, value) -> stud["age"], non stud.age

2)let array = [1, 5, 2]
function addtoarray(array, element), HAS to know to match typeof numbers

3)let array = [1, 2, true, 3, "pippo", false]
function cleanarray(type), creates array with only elements with said typeof

*/

let student1 = { name: "name1", surname: "surname1", age: 20, sex: "M" }
let student2 = { name: "name2", surname: "surname2", age: 23, sex: "M" }
let student3 = { name: "name3", surname: "surname3", age: 24, sex: "F" }
let student4 = { name: "name4", surname: "surname4", age: 20, sex: "F" }
let student5 = { name: "name5", surname: "surname5", age: 26, sex: "M" }
let student6 = { name: "name6", surname: "surname6", age: 27, sex: "F" }
let student7 = { name: "name7", surname: "surname7", age: 19, sex: "M" }
let student8 = { name: "name8", surname: "surname8", age: 22, sex: "M" }
let student9 = { name: "name9", surname: "surname9", age: 20, sex: "F" }
let student10 = { name: "name10", surname: "surname10", age: 23, sex: "F" }

let students = [student1, student2, student3, student4, student5, student6, student7, student8, student9, student10]

console.log(students);

function filterAge(age) {
    let arrayAge = []
    // for (let i = 0; i < students.length; i++) {
    //     if (students[i].age === age) {
    //         arrayAge.push(students[i])
    //     }
    for (const student of students) {
        if (student.age === age) {
            arrayAge.push(student)
        }
    } return arrayAge
}

console.log(filterAge(20));



function filterSex(sex) {
    let arraySex = []
    // for (let i = 0; i < students.length; i++) {
    //     if (students[i].sex === sex) {
    //         arraySex.push(students[i])
    //     }
    for (const student of students) {
        if (student.sex === sex) {
            arraySex.push(student)
        }
    } return arraySex
}

console.log(filterSex("F"));



function filter(arraytofilter, property, value) {
    let arrayfine = []
    // for (let i = 0; i < students.length; i++) {
    //     if (students[i][property] === value) {
    //         arrayfine.push(students[i])
    //     }
    for (const element of arraytofilter) {
        if (element[property] === value) { //sq brackets in property because it's a string, instead of .property
            arrayfine.push(element)
        }
    } return arrayfine
}

console.log(filter(students, "age", 20));
console.log(filter(students, "sex", "F"));

//esercizio2

let array2 = [1, 5, 2]

function addtoarray(array, element) {
    if (typeof element === typeof array[0]) {
        array.push(element)
        return array
    }
    return "error"  //is already "else", no need to specify if outside scope of if
    // for (let i = 0; i <= array.length; i++) {
    //     if (typeof element === "number") {
    //         array.push(element)
    //     } else {
    //         return undefined
    //     }
    //     return array
    // }
}

console.log(addtoarray(array2, 3))
// console.log(addtoarray(array2, "jhdgfjds"))

//esercizio 3


let multarray = [1, 2, true, 3, "pippo", false]

function cleanarray(arraytoclean, type) {
    let newarray = []
    // for (let i = 0; i < arraytoclean.length; i++) {
    //     if (typeof arraytoclean[i] === type) {
    //         newarray.push(arraytoclean[i])
    //     }
    // } return newarray;
    for (const element of arraytoclean) {
        if (typeof element === type) {
            newarray.push(element)
        }
    } return newarray
}

console.log(cleanarray(multarray, "string"));

//compito

let arrayc = [100, 101, 9, 1000, 12, -3, -454]


function filtergreaterthan100(array) {
    let hundtestarray1 = []
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] < 100) {
    //         hundtestarray1.push(array[i])
    //     }
    for (const element of array) {
        if (element <= 100) {
            hundtestarray1.push(element)
        }
    } return hundtestarray1
}

console.log(filtergreaterthan100(arrayc));

function greaterthan30(number) {
    // if (number > 30) {
    //     return true
    // } else {
    //     return false
    // }
    return (number > 30)           //already returns true or false, way quicker
}

function filterz(array, filterfunc) {
    let thirtyarray = []
    // for (let i = 0; i < array.length; i++) {
    //     if (greaterthan30(array[i]) === true) {
    //         thirtyarray.push(array[i])
    //     }
    // } return thirtyarray
    for (const element of array) {
        if (filterfunc(element) /*=== true, isn't necessary*/) {
            thirtyarray.push(element)
        }
    } return thirtyarray
}

console.log(filterz(arrayc, greaterthan30));

function iseven(element) {
    // if (element % 2 === 0) {
    //     return true
    // } else {
    //     return false
    // }
    return (element % 2 === 0)  //% è il resto, per questo deve esser 0
}

console.log(filterz(arrayc, iseven));  //manual filter

console.log(arrayc.filter(iseven));   //javascript's filter

function ispositive(element) {
    return (element > 0);
}

console.log(arrayc.filter(ispositive));

function isnegative(element, index) {
    return (element < 0);
}
let isnegative2 = function (element, index) {       //other way to spell it, meh
    return (element < 0);
}
let isnegative3 = (element, index) => element < 0;  //another spelling fat arrow is what's returning
// let isnegative3 = (element) => {
//     if (element < 0) {
//         return true                     
//     } else {
//         return false            //verbose version of a lambda function
//     }
// }


console.log(arrayc.filter(isnegative));

console.log(arrayc.filter(function (element) {             //creates function on the fly!
    return element < 0;
}));

console.log(arrayc.filter((element) => element < 0));         //same here

function hasevenpos(element, index) {
    if (index % 2 === 0) {
        return true;
    } else {
        return false;                   //verbose
    }
}

console.log(arrayc.filter(hasevenpos));

console.log(arrayc.filter(function (element, index) {
    return index % 2 === 0;
}));

console.log(arrayc.filter((e, i) => i % 2 === 0));

/////////.MAP FUNCTION, MANIPULATION FUNCTION

function addonetoarray(arraytomod) {
    let temp = []
    for (const e of arraytomod) {
        let modifiedelem = e + 1
        temp.push(modifiedelem)
    }
    return temp
}

console.log(addonetoarray(arrayc));

function mapverbose(arraytomod, alterationfunc) {
    let temp = []
    for (const elem of arraytomod) {
        let modifiedelem = alterationfunc(elem)
        temp.push(modifiedelem)
    }
    return temp
}

function addone(elem) {
    return elem + 1
}

console.log(mapverbose(arrayc, addone));

console.log(arrayc.map(addone));

console.log(arrayc.map(function (element) {
    return element + 1;
}));

console.log(arrayc.map((element) => element + 1));

function elementindexproduct(element, index) {
    return element * index
}
console.log(arrayc.map(elementindexproduct));
console.log(arrayc.map(function (element, index) { return element * index }));

console.log(arrayc.map((e, i) => e * i));

console.log(arrayc.map(elementindexproduct)
    .filter(isnegative));


///////////////////////////

let testarray1 = [12, 57, 1001, -67, -12, 5, 37, 48, -6000]
let testarray2 = ["pippo", "pluto", "paperino", "topolino", "paperone", "paperoga"]

let filtetestarray11 = testarray1.filter((element) => element % 3 === 0);
let filtetestarray11a = testarray1.filter(function (element) {
    return element % 3 === 0
})
//keep all numbers divisible by 3

let filtetestarray12 = testarray2.filter(element => element.length > 6);
let filtetestarray12a = testarray2.filter(function (element) {
    return element.length > 6
})
//keep all strings longer than 6 chars

let mappedarray1 = testarray1.map(element => element - (element * 10 / 100));  //oppure * 0.9 
let mappedarray1a = testarray1.map(function (element) {
    return element - (element * 10 / 100)
})
//     let increment = element * 10 / 100
//     return element - increment
// })
// //all numbers must be reduced by 10%

let mappedarray2 = testarray2.map(element => element.toUpperCase())
let mappedarray2a = testarray2.map(function (element) {
    return element.toUpperCase()
})
//all strings must be capitalized

let modifiedarray1 = testarray1.map(element => {
    if (element < 0) {
        element = element * -1
    } return element
}).filter((element) => element <= 100)
//all numbers will turn positive + remove numbers > 100

let modifiedarray2 = testarray2.map(element => element.charAt(0).toUpperCase() + element.substring(1))
    .filter((element) => element.toLowerCase().includes("r"))  //tolowercase includes capitalized R too

// //all strings capitalize first letter + remove strings w/o letter R

console.log(filtetestarray11);
console.log(filtetestarray11a);
console.log(filtetestarray12);
console.log(filtetestarray12a);
console.log(mappedarray1);
console.log(mappedarray1a);
console.log(mappedarray2);
console.log(mappedarray2a);
console.log(modifiedarray1);
console.log(modifiedarray2);


// console.log(arrayc.map(elementindexproduct)
//     .filter(isnegative));


/// .REDUCE FUNCTION



function sumallarray(arraytosum) {
    let resultsum = 0
    for (const element of arraytosum) {
        resultsum = resultsum + element
    }
    return resultsum
}

console.log(sumallarray(testarray1));

function sum(previous, current) {
    return previous + current
}

function product(previous, current, index) {
    return previous * current
}
function sumevenindex(previous, current, index) {
    if (index % 2 === 0) {
        return previous + current
    } else {
        return previous
    }
}
function reduceverbose(arraytoaggregate, aggregationfunction, startingelement) {
    let result;
    let startingindex;
    if (startingelement !== undefined) {
        result = startingelement
        startingindex = 0;
    } else {
        result = arraytoaggregate[0]
        startingindex = 1;
    }

    for (let i = startingindex; i < arraytoaggregate.length; i++) {
        const element = arraytoaggregate[i];
        result = aggregationfunction(result, element, i)
    }
    return result
}
console.log(reduceverbose(testarray1, sum));
console.log(reduceverbose(testarray1, product));
console.log(reduceverbose(testarray1, sumevenindex));

console.log(testarray1.reduce((previous, current, index, array) => previous + current, 0)); //full syntax order



function dividestring(prev, curr) {
    if (curr[0] === "p") {
        // if (prev[0]) {
        //     prev[0].push(curr)
        // } else {
        //     prev[0]=[]
        //     prev[0].push(curr)
        // }
        if (!prev[0]) {               //since prev[0].push(curr) happens regardless, only limit prev[0] = [] 
            prev[0] = []
        }
        prev[0].push(curr)
    } else {
        // if (prev[1]) {
        //     prev[1].push(curr)
        // } else {
        //     prev[1]=[]
        //     prev[1].push(curr)
        // }
        if (!prev[1]) {
            prev[1] = []
        }
        prev[1].push(curr)
    }
    return prev
}
console.log(testarray2.reduce(dividestring, []));
console.log(testarray1.reduce(sumbysign, {}));

function sumbysign(prev, curr) {
    // if (curr >= 0) {
    //     if (prev.sumofpositive) {
    //         prev.sumofpositive = prev.sumofpositive + curr
    //     } else {
    //         prev.sumofpositive = 0
    //         prev.sumofpositive = prev.sumofpositive + curr
    //     }
    // } else {
    //     if (prev.sumofnegative) {
    //         prev.sumofnegative = prev.sumofnegative + curr
    //     } else {
    //         prev.sumofnegative = 0
    //         prev.sumofnegative = prev.sumofnegative + curr
    //     }
    // }
    if (curr >= 0) {
        if (!prev.sumofpositive) {
            prev.sumofpositive = 0
        }
        prev.sumofpositive += curr
    } else {
        if (!prev.sumofnegative) {
            prev.sumofnegative = 0
        }
        prev.sumofnegative += curr
    }
    return prev
}

let testarray3 = ["la", "vergogna", "casa", "dannazione", "ha", "pippo", "preso", "secchio", "fuoco"]

//result must be "la casa ha preso fuoco"

function cleanta3(prev, curr, index) {
    if (index % 2 === 0) {
        return prev + curr
    } else {
        return prev + " "
    }
}
console.log(testarray3.reduce(cleanta3, []));

// function cleanta3verbose(prev, curr, index) {
//     let tempstring = prev
//     if (index % 2 !== 0) {
//         return tempstring;
//     } else {
//         tempstring = tempstring + " " + curr;
//         return tempstring;
//     }  
// //     if (index % 2 !== 0) {
// //         return prev
// //     } else {
// //         return prev + " " + curr
// //     }
// }

// console.log(testarray3.reduce(cleanta3verbose, ""));


console.log(testarray3.reduce((p, c, i) => i % 2 !== 0 ? p : p + " " + c));
//asks if index is odd, if yes return p, if not (even) p then space then c

let array = [12, 345, -1234, 1, 0, 23456, -2, 2, 3]
let array1 = ["Pippo", "Paperino", "Gambadilegno", "Basettoni", "Clarabella", "Osvaldo"]

///////////////// biggest overall

console.log(array.reduce((p, c) => c > p ? c : p));

console.log(array.reduce(() => Math.max(...array)));

///////////////// smallest of the negatives

function lowestofnegatives(previous, current) {
    // if (previous) {
    //     if (current < 0) {
    //         if (current < previous) {
    //             return current
    //         } else {
    //             return previous
    //         }
    //     } else {
    //         return previous
    //     }
    // } else {                    //if previous is undefined
    //     if (current < 0) {      //here until you find one that's negative
    //         return current
    //     } else {
    //         return previous
    //     }
    // }
    if (previous) {
        if (current < previous) {
            return current
        } else {
            return previous
        }
    } else {
        if (current < 0) {
            return current
        } else {
            return previous
        }
    }
}
console.log(array.reduce(lowestofnegatives));

console.log(array.filter((e) => e < 0).reduce(() => Math.min(...array)));
console.log(array.filter((e) => e < 0).reduce((p, c) => c < p ? c : p));

console.log(array.reduce((p, c) => c < 0 ? [...p, c] : p, []).reduce((p, c) => c < p ? c : p));

/////////////////// sum of even numbers

console.log(array.reduce((p, c) => c % 2 === 0 ? p + c : p));

console.log(array.reduce((p, c) => c % 2 === 0 ? p + c : p, 0));

////////////////////////


let string = "piippo"
function checkifstringcontainsvowel(string) {

    let vowels = ["a", "e", "i", "o", "u"]

    for (let i = 0; i < vowels.length; i++) {
        const vowel = vowels[i];
        if (string.includes(vowels)) {
            return true
        }

        // if (char === "a") {
        //     return true
        // }
        // if (char === "e") {
        //     return true
        // }
        // if (char === "i") {
        //     return true
        // }
        // if (char === "o") {
        //     return true
        // }
        // if (char === "u") {
        //     return true
        // }
    } return false
}

console.log(checkifstringcontainsvowel(string));

//SOME AND EVERY    

//array.some()            //if at least one of the cases is true, then true

//array.every()           //true if all are true, if one is false it's false

function checkifstringcontainsvowel2(string) {
    // let vowels = ["a", "e", "i", "o", "u"]
    // return vowels.some((v) => string.includes(v))
    return ["a", "e", "i", "o", "u"].some((v) => string.includes(v))
}
console.log(checkifstringcontainsvowel2(string));

function checkifstringnotcontainsvowel(string) {
    return !["a", "e", "i", "o", "u"].some((v) => string.includes(v))
}
console.log(checkifstringcontainsvowel2(string));

let numberarrayz = [2, 5, 7, 9]
console.log(numberarrayz.every((v) => v % 2 === 0));
/////////////////////////

function arrayofvowels(string) {
    let arrayfromstring = [...string]
    let vowelsarray = arrayfromstring.filter(checkifstringcontainsvowel2)
    return vowelsarray
}

function arrayofconsonants(string) {
    let arrayfromstring = [...string]
    let vowelsarray = arrayfromstring.filter(checkifstringnotcontainsvowel)
    return vowelsarray
}

console.log(arrayofvowels(string).join("")); ///join converts array to string, by default separates with comma, can be changed to anything
console.log(arrayofconsonants(string));

let arrayofcon = arrayofconsonants(string)

let setofconsonants = new Set(arrayofcon)   //set auto removes doubles

let stringofcon = [...setofconsonants].join("")

console.log(setofconsonants);
console.log(stringofcon);

console.log([...new Set(arrayofconsonants(string))].join(""));


//////////////////////


//reduce for array of vowels

//let array1 = ["Pippo", "Paperino", "Gambadilegno", "Basettoni", "Clarabella", "Osvaldo"]

function buildarray(prev, curr) {
    prev.push(...arrayofvowels(curr))
    return prev
}
console.log(array1.reduce(buildarray, []));

/////////////////////////////////////////////

//forEach

array1.forEach((e) => console.log(e));

for (const string of array1) {
    console.log(string.toUpperCase());
}

array1.forEach((e) => console.log(e.toUpperCase()));

//sort

console.log(array.sort()); //sort from smallest to biggest
console.log(array1.sort()); //alphabetic order, numbers would come earlier
console.log(students.sort(comparestudentsverbose)); //when objects are complex, sort can't work on its own, so it requires compare function

function comparestudentsverbose(st1, st2) {  //always needs two elements for the compare func
    if (st1.age > st2.age) {
        return 1
    }

    if (st1.age < st2.age) {
        return -1
    }

    if (st1.age === st2.age) {
        return 0
    }
}

function comparestudents(st1, st2) {
    return st1.sex.localeCompare(st2.sex)     //compare based on default browser language for text compare
}

console.log(students.sort(comparestudents));


function comparestudent2(st1, st2) {
    return st1.age - st2.age
}

console.log(students.sort(comparestudent2));


///////////////////////

let athlete1 = { name: "lorena", surname: "landi", position: 2 }
let athlete2 = { name: "giovanni", surname: "landi", position: 2 }
let athlete3 = { name: "pippo", surname: "barbigli", position: 1 }
let athlete4 = { name: "simona", surname: "perri", position: 3 }
let athlete5 = { name: "elmo", surname: "recalcati", position: 2 }

let athletes = [athlete1, athlete2, athlete3, athlete4, athlete5]

function comparebysurname(ath1, ath2) {
    return ath1.surname.localeCompare(ath2.surname)
}

function comparebyposition(ath1, ath2) {
    return ath1.position - ath2.position
}

function comparebypositionplus(ath1, ath2) {   //if position is same compares surname, if surname same use name
    if (ath1.position === ath2.position) {
        if (ath1.surname != ath2.surname) {
            return ath1.surname.localeCompare(ath2.surname)
        } else {
            return ath1.name.localeCompare(ath2.name)
        }
    } return ath1.position - ath2.position
}

console.log([...athletes].sort(comparebyposition));  //sort OVERRIDES original order, so you NEED TO SPREAD IT
console.log([...athletes].sort((a1, a2) => a1.position - a2.position))

console.log([...athletes].sort(comparebysurname));
console.log([...athletes].sort((a1, a2) => a1.surname.localeCompare(a2.surname)))

console.log([...athletes].sort(comparebypositionplus));
console.log([...athletes].sort((a1, a2) => a1.position != a2.position ? a1.position - a2.position :
    (a1.surname != a2.surname ? a1.surname.localeCompare(a2.surname) : a1.name.localeCompare(a2.name))));


//let array1 = ["Pippo", "Paperino", "Gambadilegno", "Basettoni", "Clarabella", "Osvaldo"]

//reduce for string of consonants without repetition


function buildarray2(prev, curr) {
    prev.push(...arrayofconsonants(curr))
    return prev
}
console.log([...new Set(array1.reduce(buildarray2, []))].join(" ").toUpperCase());

//console.log([...new Set(arrayofconsonants(string))].join(""));

//map that changes uppercase to lowercase and viceversa, then turn into reduce

function swapCase(letters) {
    let newLetters = [];
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === letters[i].toLowerCase()) {
            newLetters += letters[i].toUpperCase();
        } else {
            newLetters += letters[i].toLowerCase();
        }
    }
    // console.log(newLetters);
    return newLetters;
}

function switchCase(string) {
    const firstchar = string[0]    //first and foremost use const, if you have to change it then swap to let
    const firstcharlower = firstchar.toLowerCase()
    const remainingstring = string.substring(1)  //substring, number from where it starts
    const remainingstringupper = remainingstring.toUpperCase()
    return firstcharlower + remainingstringupper
}

console.log(array1.map(swapCase));
console.log(array1.map(switchCase));

console.log(array1.map((s) => s[0].toLowerCase() + s.substring(1).toUpperCase()));
console.log(array1.reduce((p, c) => [...p, switchCase(c)], [])); //[] è lo starting element, cuz p & c are already in the first []
//it's needed because otherwise the first one spreads, and all other ones are switched case, NEVER BECOMING P

//filter keeps only strings with b, then turn into reduce


console.log(array1.filter((e) => e.toLowerCase().includes("b")).join(", "));
console.log(array1.reduce((p, c) => c.toLowerCase().includes("b") ? [...p, c] : p, []));

function checkifcontainsvalue(string, stringtocheck) {
    return string.toLowerCase().includes(stringtocheck)
}

console.log(checkifcontainsvalue("pippo", "p"))
console.log(array1.filter((s) => checkifcontainsvalue(s, "p")))

//Functions that generate other functions

function checkifcontainsvalue2(stringtocheck) {
    return (string) => string.toLowerCase().includes(stringtocheck)
}
const checkR = checkifcontainsvalue2("r")
console.log(checkR("pippo"));

const checkP = checkifcontainsvalue2("p")
console.log(checkR("pippo"));