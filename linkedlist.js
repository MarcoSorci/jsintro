

let first = { value: 1, next: null, prev: null }

let second = { value: 2, next: null, prev: first }

first.next = second

let third = { value: 3, next: null, prev: second }

second.next = third

let fourth = { value: 4, next: null, prev: third }

third.next = fourth

let node = first;

let myfirstnode = {};

function addelementtolinkedlist(firstnode, value) {
    if (firstnode.value === undefined) {
        firstnode.value = value;
        firstnode.next = null
        firstnode.prev = null
    } else {

        let lastnode = firstnode;

        while (lastnode.next !== null) {
            lastnode = lastnode.next;
        }

        let node = { value: value, prev: lastnode, next: null }

        lastnode.next = node;
    }
}

addelementtolinkedlist(myfirstnode, 6)
console.log(myfirstnode);
addelementtolinkedlist(myfirstnode, 16)
console.log(myfirstnode);
addelementtolinkedlist(myfirstnode, 116)
console.log(myfirstnode);

// while (true) {
//     console.log(node.value);
//     if (node.next !== null) {  //if next element doesn't exist, add next
//         node = node.next;
//     } else {
//         break;
//     }
// }

while (node !== null) {
    console.log(node.value);   //same as the one above
    node = node.next;
}

let node2 = fourth                //backwards

while (node2 !== null) {
    console.log(node2.value);
    node2 = node2.prev;
}
//come viene fatto nel libro ↓
for (let node = first; node !== null; node = node.next) {  //node !== null è uguale a solo node, asks if true by default
    console.log(node);
}

let el1 = { value: "tizio", rest: null }
let el2 = { value: "caio", rest: el1 }
let el3 = { value: "sempronio", rest: el2 }
console.log(el3);
let ela = { value: "poo", rest: el3 }
let elb = { value: "poooop", rest: el3 }
console.log(ela);
console.log(elb);






console.log("COMPITO 1 - linked list");

function arraytolinkedlist(array) {
    let firstnode;
    for (let i = array.length - 1; i >= 0; i--) {    //length - 1 perchè si conta da 0 (1,2,3 il 3 è 2)
        // let rest
        // if (firstnode === null) {
        //     rest === null
        // } else {
        //     rest = firstnode
        // }
        let node = { value: array[i], rest: firstnode };
        firstnode = node;
    }
    return firstnode
}

console.log(arraytolinkedlist([1, 2, 3]));

/*
i = 2-1(1), if i is bigger/equal than 0, i-1(2-1=1) 
linklist = {value: array[1] which is 10, next linklist which is {value: 20, next: etc...}}
*/

function linkedlisttoarray(list) {
    let array = [];
    let node = list
    while (node != null) {
        array.push(node.value)
        node = node.next
    }
    return array;
}
console.log(linkedlisttoarray(arraytolinkedlist([10, 20, 30])));

function prepend(value, list) {
    return { value, next: list };  //the {} makes new list
}
let elc = prepend("ciccia", elb) //ties it to elb at the start
console.log(elc);

console.log(prepend(10, prepend(20, null)));  //is returning a new list with value 10 and next, value 20 next null

function nth(list, number) {   //supposed to return the position (number) in the list
    if (!list) {
        return undefined
    };  //if no list (list===null) returns undefined, all the IF properties are optional
    if (number == 0) {
        return list.value
    }; //if number's 0 gives first element value which is 0 by default
    return nth(list.next, number - 1); //-1 because it's next and also starts count from 0 always
}
function nth2(list, index, startindex) {
    if (list === null) {
        return undefined
    }
    if (startindex === index) {
        return list.value
    }
    let node = list.next
    startindex++
    return nth2(node, index, startindex)
}
// function nth3(listnode, index) {
//     if (!list) {
//         return undefined
//     } else 
// }

// console.log(linkedlisttoarray(elc));
// console.log(nth(elc, 12));
// console.log(nth2(elc, 3, 0));

// function nth(listnode, index) {
//     let node = listnode
//     let actualindex = 0
//     while (node !== null) {
//         if (actualindex === index) {
//             return node.value
//         }
//         node = node.next
//         actualindex++
//     }
//     return undefined
// }
console.log(nth(arraytolinkedlist([10, 20, 30]), 2));

console.log("COMPITO 2 - deep copy");

function deepEqual(a, b) {
    if (a === b) return true;

    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;

    let keysA = Object.keys(a), keysB = Object.keys(b); //obj.keys is list of keys

    if (keysA.length != keysB.length) return false;

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }

    return true;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true

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
    for (let i = 0; i < students.length; i++) {
        if (students[i].age === age) {
            arrayAge.push(students[i])
        }
    } return arrayAge
}

console.log(filterAge(20));



function filterSex(sex) {
    let arraySex = []
    for (let i = 0; i < students.length; i++) {
        if (students[i].sex === sex) {
            arraySex.push(students[i])
        }
    } return arraySex
}

console.log(filterSex("F"));



function filter(property, value) {
    let arrayfine = []
    for (let i = 0; i < students.length; i++) {
        if (students[i][property] === value) {
            arrayfine.push(students[i])
        }
    } return arrayfine
}

console.log(filter("age", 20));
console.log(filter("sex", "F"));

//esercizio2

let array2 = [1, 5, 2]

function addtoarray(array, element) {
    for (let i = 0; i <= array.length; i++) {
        if (typeof element === "number") {
            array.push(element)
        } else {
            return undefined
        }
        return array
    }
}

console.log(addtoarray(array2, 3))
// console.log(addtoarray(array2, "jhdgfjds"))

//esercizio 3


let array = [1, 2, true, 3, "pippo", false]

function cleanarray(type) {
    let newarray = []
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === type) {
            newarray.push(array[i])
        }
    } return newarray;
}

console.log(cleanarray("string"));

//compito

let arrayc = [100, 101, 9, 1000, 12, -3]


function filtergreaterthan100(array) {
    let hundredarray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 100) {
            hundredarray.push(array[i])
        }
    } return hundredarray
}

console.log(filtergreaterthan100(arrayc));

function greaterthan30(number) {
    if (number > 30) {
        return true
    }
}

function filtergreaterthan30(array) {
    let thirtyarray = []
    for (let i = 0; i < array.length; i++) {
        if (greaterthan30(array[i]) === true) {
            thirtyarray.push(array[i])
        }
    } return thirtyarray
}

console.log(filtergreaterthan30(arrayc));

