let firstArray = [1, true, "oop"]; //ideally they should contain things of the same type

console.log(firstArray);

let secondArray = ["this one", "that one", "them two"]

console.log(secondArray.length);

for (let i = 0; i < secondArray.length; i++) {  //when typing FOR use TAB to cycle between elements
    const element = secondArray[i];
    console.log(element);
}

for (const element of secondArray) {  //FOROF, short version of that one up top, only if idc about index
    console.log(element);
}

secondArray.push("the last one")  //PUSH is put at the end of the stack, normally is LIFO

console.log(secondArray);

let lastelement = secondArray.pop()   // POP removes item from end of the stack, naming it lets you pick it again

console.log(secondArray);
console.log(lastelement);

let firstelement = secondArray.shift()  //SHIFT removes first element

console.log(secondArray);
console.log(firstelement);

secondArray.unshift("the first one")  //UNSHIFT adds first element
console.log(secondArray);

console.log(secondArray[1]); //starts counting from 0

secondArray[1] = "the other one"
console.log(secondArray);

let thirdArray = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10];

let subArray = thirdArray.slice(3, 6) //position start of the cut not included, end of cut included

console.log(subArray);

console.log(thirdArray);

let subArray2 = thirdArray.splice(2, 3, 12, 13, 14) //actually cuts it, while slice just copies

console.log(subArray2);

console.log(thirdArray);

let biggestnumber = Math.max(5, 10, 2)
console.log(biggestnumber);

let arraysbiggestnumber = Math.max(...thirdArray) //... is Spread Operator: spreads array and uses what's inside it
console.log(arraysbiggestnumber);

function longeststring(...strings) {
    let str = ""
    for (let i = 0; i < strings.length; i++) {
        const element = strings[i];
        if (str.length < element.length) {
            str = element;
        }
    }
    return str;
}
console.log(longeststring("piiii", "paaaaaaaa", "pooo"));

function max(...numbers) {    //spread allows you to input as many as you want **, as opposed to each individual parameter 
    //let maxnumber = -Infinity //checks for negatives too
    let maxnumber = numbers[0]; //[0]makes the first the biggest, then compares to others
    for (let i = 0; i < numbers.length; i++) {  //cycles only for the length of the array with .length
        const element = numbers[i];
        if (maxnumber < element) {
            maxnumber = element;
        }
    }
    return maxnumber
}

console.log(max(-17, -100, -10, -3, -2790)); //**here

/*
1)math min
2)function with param num positivo, returns array with numbers from 0 to N
3)function with an array of strings as param, returns array of strings with its initials
*/

//Esercizio 1

function min(...numbers) {
    let minnumber = Infinity;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (minnumber > element) {
            minnumber = element;
        }
    }
    return minnumber
}

console.log(min(-17, -100, -10, -3, 2790));

//Esercizio 2

// function range(num) {
//       let arr = [num];
//       for (let i = 0; i <= num; i++) {
//           const element = arr[i];
//           arr.unshift(i)
//       }
//     let initialnumber = arr.pop()
//     console.log(initialnumber);
//     return arr.reverse();
// }
function range(maxnumber) {
    let arr = [];
    for (let i = 0; i <= maxnumber; i++) {
        arr.push(i)
    }
    return arr
}


console.log(range(9));

//Esercizio 3

function startingchar(strarray) {
    let init = []
    for (const element of strarray) {
        if (element !== "") { //if element is not empty
            init.push(element[0])
        }
    }
    return init
}

let strings = ["Cosenza", "Genova", "Alessandria", "", "Milano"]
console.log(startingchar(strings));

//Compiti, the sum of a range, then reversearray

console.log("SUM OF A RANGE");
let arrex = [];
let step = 1
// function rangex(start, end, step) {
//     for (let i = start; i <= end; i++) {
//         arrex.push(i)
//         i = i + step - 1
//     }
//     return arrex
// }
function rangex(min = 0, max, step) {
    let start = step > 0 ? min : max
    // let end;
    // if (step > 0) {
    //     end = max;
    // } else {
    //     end = min;
    // }
    for (let i = start; i <= max; i += step) {
        arrex.push(i)
    }
    return arrex
}

console.log(rangex(1, 10, 1));


function sumarray(numbers) {

    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        // const element = number[i];
        result += numbers[i];
    }
    return result
}

console.log(sumarray(rangex(5)));

console.log("REVERSE ARRAY");

function reverseArray(arr) {
    let arr1 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr1.push(arr[i]);  //const element = array[i]; then, arr1.push(element)
    }
    return arr1

    // for (const number of arr) {   //more elegant
    //     arr1.unshift(number)
    // }
    // return arr1
}

console.log(reverseArray(["A", "B", "C", "D"]));

let array = [1, 2, 3, 4, 5, 6, 7]

function reverseArrayInPlace(arr) {
    // array = reverseArray(array);    //waaay easier, not what's asked but easier 
    // let rev = reverseArray(arr)
    // arr.length = 0;
    // arr.push(...rev)


    for (let i = 0; i < arr.length / 2; i++) {
        let heldelement = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = heldelement
    }
    return arr

    // for (let i = 0; i < arr.length / 2; i++) {
    //     // const headelem = arr[i];
    //     // const tailelem = arr[arr.length - 1 - i];
    //     // let temp = headelem;
    //     // headelem = tailelem;
    //     // tailelem = temp
    //     let temp = arr[i]
    //     arr[i] =  arr[arr.length - 1 - i]
    //     arr[arr.length - 1 - i] = temp;
    //}
}
reverseArrayInPlace(array);
console.log(array);