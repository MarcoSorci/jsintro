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

secondArray.push("the last one")  //is put at the end of the stack, normally is LIFO

console.log(secondArray);

let lastelement = secondArray.pop()   //removes item from end of the stack, naming it lets you pick it again

console.log(secondArray);
console.log(lastelement);

let firstelement = secondArray.shift()  //removes first element

console.log(secondArray);
console.log(firstelement);

secondArray.unshift("the first one")  //adds first element
console.log(secondArray);

console.log(secondArray[1]); //starts counting from 0

secondArray[1] = "the other one"
console.log(secondArray);

let thirdArray = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10];

let subArray = thirdArray.slice(3, 6) //position start of the cut not included, end of cut included

console.log(subArray);

console.log(thirdArray);

let  subArray2 = thirdArray.splice(2, 3, 12, 13, 14) //actually cuts it, while slice just copies

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
    let maxnumber = -Infinity;
    for (let i = 0; i < numbers.length; i++) {  //cycles only for the length of the array with .length
        const element = numbers[i];
        if (maxnumber < element) {
            maxnumber = element;
        }
    }
    return maxnumber
}

console.log(max(-17, -100, -10, -3, -2790)); //**here