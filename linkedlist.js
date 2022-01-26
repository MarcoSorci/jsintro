

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
    console.log(node.value);
    node = node.next;
}

let node2 = fourth                //backwards

while (node2 !== null) {
    console.log(node2.value);
    node2 = node2.prev;
}

console.log("COMPITO 1 - linked list");

function arraytolinkedlist(array) {
    let linklist = null
    for (let i = array.length - 1; i >= 0; i--) {
        linklist = { value: array[i], next: linklist }
    }
    return linklist
}

console.log(arraytolinkedlist([10, 20]));

/*
i = 2-1(1), if i is bigger/equal than 0, i-1(2-1=1) 
linklist = {value: array[1] which is 10, next linklist which is {value: 20, next: etc...}}
*/

function linkedlisttoarray(list) {
    let array = [];
    for (let node = list; node; node = node.next) {
        array.push(node.value);
    }
    return array;
}
console.log(linkedlisttoarray(arraytolinkedlist([10, 20, 30])));

function prepend(value, list) {
    return { value, next: list };  //the {} makes new list
}

console.log(prepend(10, prepend(20, null)));  //is returning a new list with value 20 and next null

function nth(list, number) {   //supposed to return the position (number) in the list
    if (!list) return undefined;  //if no list returns undefined, all the IF properties are optional
    else if (number == 0) return list.value; //if number's 0 gives value which is 0 by default
    else return nth(list.next, number - 1); //why -1???? wtf
}

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
