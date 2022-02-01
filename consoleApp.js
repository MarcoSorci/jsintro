//word count
//character count
//each word's repetition count
//each char's repetition count
//function that given word finds repetition count, and what index of each occurrence
//button on the page, on the click gives prompt that returns how many times prompted word appears

let text = document.getElementById("text").textContent

// function generateStats(string) {

//     const charNumber = string.length;
//     const cleanArrayFromString = cleanStringAndConvertInArray(string)
//     const wordNumber = cleanArrayFromString.length;
//     const wordOccurrency = generateOccurrencyCount(cleanArrayFromString);
//     const charOccurrency = generateOccurrencyCount([...string]);

//     console.log("Il numero dei caratteri è: " + charNumber);
//     for (const key in charOccurrency) {
//         if (Object.hasOwnProperty.call(charOccurrency, key)) {
//             const count = charOccurrency[key];
//             console.log("il carattere " + key + " compare: " + count + (count === 1 ? " volta" : " volte"));
//         }
//     }
//     console.log("---------------------------------------------------")
//     console.log("Il numero delle parole è: " + wordNumber);
//     for (const key in wordOccurrency) {
//         if (Object.hasOwnProperty.call(wordOccurrency, key)) {
//             const count = wordOccurrency[key];
//             console.log("la parola " + key + " compare: " + count + (count === 1 ? " volta" : " volte"));
//         }
//     }
// }


// function cleanStringAndConvertInArray(string) {

//     const cleanedString = string.replace(/'/g, " ")
//         .replace(/,/g, "")
//         .replace(/;/g, "")
//         .replace(/\./g, "")
//         .replace(/:/g, "")
//     const stringArray = cleanedString.split(" ");
//     return stringArray;
// }

// function replaceAll(str, find, replace) {
//     return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
// }



// function generateOccurrencyCount(stringArray) {

//     const occurrencyCount = {};

//     for (const word of stringArray) {
//         if (occurrencyCount[word]) {
//             occurrencyCount[word]++;
//         } else {
//             occurrencyCount[word] = 1;
//         }
//     }

//     return occurrencyCount;
// }


// generateStats(text);


////////////////////////////////////////////

let chars = { "'": " ", ".": "", ",": "", ";": "", ":": "" }
let s = text.replace(/[',.;:']/g, m => chars[m]).toLowerCase()
let textsplit = s.split(" ")

function countall(text, array) {
    let numarray = array.length
    let numchar = [...text].length
    return "Text contains " + numarray + " words and " + numchar + " characters"
}

console.log(countall(text, textsplit));

function countaword(array, word) {
    let counter = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] === word.toLowerCase()) {
            counter++
        }

    } return counter
}

function countachar(text, char) {
    let temparray = [...text.toLowerCase()]
    let counter = 0
    for (let i = 0; i < temparray.length; i++) {
        if (temparray[i] === char.toLowerCase()) {
            counter++
        }
        if (char === " ") {
            return "Space appears " + counter + " times"
        }
    } return counter
}

console.log(countachar(text, ","));

////////////////
function searchword(text, wordtosearch, iscasesensitive, isfullword) {
    const arrayofindex = []
    let texttosearch = text
    let index = 0
    while (true) {
        index = texttosearch.toLowerCase().indexOf(wordtosearch.toLowerCase())
        if (index === -1) {
            break
        } else {
            arrayofindex.push(index)
            texttosearch = texttosearch.substring(index + wordtosearch.length)
        }
    } return arrayofindex
}

console.log(searchword(text, "Milziade"));
////////////////

function countawordandindex(array, word) {
    let counter = 0
    let indexarray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] === word.toLowerCase()) {
            indexarray.push(i)
            counter++
        }

    } return "The word is seen " + counter + " times, and in these indices: " + indexarray.join(", ")
}

console.log(countawordandindex(textsplit, "milziade"));

function startSearch() {
    let useradjective = prompt("Enter word to search")
    alert(countawordandindex(textsplit, useradjective))
}

document.getElementById("stats").innerText = stats;
function refresh() {
    text = document.getElementById("text").textContent;
    stats = "Char count: " + text.length + "\nWord count: " + (countaword(textsplit))
        + "\n\nWord repetition:\n" + countawordandindex(textsplit)
        + "\nChar repetition:\n" + countachar(textsplit);
    document.getElementById("stats").innerText = stats;
}