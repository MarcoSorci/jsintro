

let first = {value: 1, next: null, prev: null}

let second = {value: 2, next: null, prev: first}

first.next=second

let third = {value: 3, next: null, prev: second}

second.next=third

let fourth = {value: 4, next: null, prev: third}

third.next=fourth

let node = first;

let mylinkedlist;

function addelementtolinkedlist(linkedlist, value) {
    if (linkedlist === undefined) {
        
    }
}

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

//COMPITO 1

function linkedlisttoarray(list) {
    while (node !== null) {
        //??? instead of logging, add to the array
        node = node.next;
    }
}
console.log(linkedlisttoarray(first)); //[1,2,3,4]

let array = [7,8,12,5]



function arraytolinkedlist(array) {
    
}

console.log(arraytolinkedlist(array));