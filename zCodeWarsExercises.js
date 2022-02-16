const scores = ["3:1", "2:2", "0:1", "4:2", "1:4", "1:1", "3:2", "1:2", "3:4", "1:3"]

function points(games) {
    let newarray = []
    for (const game of games) {
        let x = game[0]
        let y = game[2]
        if (x > y) {
            newarray.push(3)
        } else if (x > y) {
            newarray.push(0)
        } else {
            newarray.push(1)
        }
    } return newarray.reduce((p, c) => p + c)

}

console.log(points(scores));


/////////////////////////////////////
// generate a phone number in the american format

function base() {
    let range = [...new Array(10).keys()] //this prints the keys(indices up to the number given (starting from 0 ofc))
    let format = "+(xxx) xxx-xxxx"
    for (let i = 0; i < range.length; i++) {
        format = format.replace("x", range[i])
    }
    return format
}
console.log(base());

function random() {
    let range = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10))
    // let format = "+(xxx) xxx-xxxx"
    // for (let i = 0; i < range.length; i++) {
    //     format = format.replace("x", range[i])
    // }
    // return format 
    return range.reduce((p, c) => p.replace("x", c), "+(xxx) xxx-xxxx")
}

console.log(random());
/////////////////////////////////////
let s1 = "test"

function getMiddle(s) {
    return [...s].reduce((p, c, i, a) => a.length % 2 === 0 ? s.substring((i / 2), ((i / 2) + 2)) : a[i / 2])
}

function getMiddle2(s) {
    let stringlength = s.length
    if (stringlength % 2 === 0) {
        let firstindex = (stringlength / 2) - 1
        let secondindex = stringlength / 2
        return string[firstindex] + string[secondindex]
    } else {
        let charindex = Math.floor(stringlength / 2)
        return string[charindex]
    }
}
function getMiddle3(s) {
    return s.slice((s.length - 1) / 2, s.length / 2 + 1);  //the second value is not included in the slice, that's why in odd length it only takes the first one (in even there's a difference of 2 between them, thus printing the first and the one between it and the second)
}

console.log(getMiddle(s1));
console.log(("b" + "a" + +"a" + "a").toLowerCase()); //++ is trying to force number conversion, thus that second "a" is NaN

/////////////////////////////////////
//sum numbers below given number, that are divisible by 3 and 5

function solution(number) {
    let set = new Set();
    for (let i = 3; i < number; i += 3) {
        set.add(i)
    }
    for (let i = 5; i < number; i += 5) {
        set.add(i)
    }

    let sum = 0
    for (const number of set) {
        sum += number
    }
    return sum
}

function solution2(number) {
    let sum = 0
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i
        }
    } return sum
}

function solution3(number) {
    return number < 0 ? 0 : [...new Array(number).keys()].reduce((p, c) => (c % 3 === 0 || c % 5 === 0) ? p + c : p, 0)
}
console.log(solution3(10));

//let array = [2,2,2,3]
//array = [...new Set(array)] //removes doubles, cuz Set only allows for each element to enter once


/////////////////////////////////////
//check if last is number, if NaN return string + 1, if it is check the secondtolast instead
//when first nan is found, substring from index + 1, parse substring + 1, return string with substring 0 to index + increased number

function incrementString(string) {
    let lastChar = string[string.length - 1]
    if (isNaN(lastChar)) {
        return string + 1
    }
    let importantIndex
    for (let i = string.length - 2; i >= 0; i--) {  //here checking secondtolast
        if (isNaN(string[i])) {
            importantIndex = i
            break
        }
    }
    const partialString = string.substring(0, importantIndex + 1)
    const stringNumber = string.substring(importantIndex + 1)
    const number = parseInt(stringNumber)
    const incrementNumber = number + 1
    return partialString + incrementNumber
}

function incrementString2(string) {
    const regex = new RegExp(/\d+$/)
    let searchResult = regex.exec(string)  //exec launches regex and puts it in searchresult
    if (!searchResult) {
        return string + 1
    } else {
        let numberFoundString = searchResult[0]
        const numberint = parseInt(numberFoundString)
        return string.substring(0, string.length - numberFoundString.length) + (numberint + 1)
    }

}
console.log("expecting montagna89, getting: ", incrementString2("montagna88"));
console.log("expecting montagna2, getting: ", incrementString2("montagna1"));
console.log("expecting 55montagna1, getting: ", incrementString2("55montagna"));

/////////////////////////////////////

let h1 = []
let h2 = ["Peter"]
let h3 = ["Jacob", "Alex"]
let h4 = ["Max", "John", "Mark"]
let h5 = ["Alex", "Jacob", "Mark", "Max"]

function likes(names) {
    if (names.length === 1) {
        return names[0] + " likes this"
    } else if (names.length === 2) {
        return names[0] + " and " + names[1] + " like this"
    } else if (names.length === 3) {
        return names[0] + ", " + names[1] + " and " + names[2] + " like this"
    } else if (names.length >= 4) {
        return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this"
    }
    return "no one likes this"
}

function likes2(names) {
    if (names.length === 1) {
        return names[0] + " likes this"
    } else if (names.length === 2) {
        return names[0] + " and " + names[1] + " like this"
    } else if (names.length >= 3) {
        let cond;
        if (names.length === 3) {
            cond = names[2] + " like this"
        } else {
            cond = (names.length - 2) + " others like this"
        }
        return names[0] + ", " + names[1] + " and " + cond
    }
    return "no one likes this"
}

function likes3(names) {
    return names.reduce((p, c, i, a) => a.length === 1 ? a[0] + " likes this" : a.length === 2 ? a[0] + " and " + a[1] + " like this" : a.length === 3 ? a[0] + ", " + a[1] + " and " + a[2] + " like this" : a.length >= 4 ? a[0] + ", " + a[1] + " and " + (a.length - 2) + " others like this" : "no one likes this")
    //reduce doesn't work on empty arrays, and case 1 doesn't work for some reason
}

console.log(likes(h5));
console.log(likes2(h5));
console.log(likes3(h2));

/////////////////////////////////////

