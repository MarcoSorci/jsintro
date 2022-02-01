//word count
//character count
//each word's repetition count
//each char's repetition count
//function that given word finds repetition count, and what index of each occurrence
//button on the page, on the click gives prompt that returns how many times prompted word appears

const text = "L'Ateniese Milziade, figlio di Cimone, spiccava fra tutti sia per l'antichità della stirpe, sia per la gloria degli antenati, sia per la propria saggezza ed aveva un'età tale che i suoi concittadini potevano non più solo concepire buone speranze su di lui, ma anche confidare che sarebbe stato quale ebbero poi modo, alla prova, di riscontrare, quando gli Ateniesi decisero di inviare dei coloni nel Chersoneso. Ce n'era un grande numero e molti chiedevano di partecipare alla spedizione, tra loro ne furono scelti alcuni e inviati a Delfi per consultare l'oracolo di Apollo su chi dovessero preferire come comandante. Quelle regioni infatti le occupavano allora i Traci e con loro bisognava combattere. La Pizia in risposta a chi la interrogava, ordinò espressamente che si prendessero come capo Milziade: se lo avessero fatto, l'impresa avrebbe avuto buon esito. In seguito al responso dell'oracolo, Milziade con truppe scelte parti con la flotta per il Chersoneso e, approdato a Lemno voleva ridurre gli abitanti dell'isola sotto il dominio degli Ateniesi e chiese ai Lemnii di arrendersi spontaneamente; quelli, schernendolo, risposero che lo avrebbero fatto quando lui, salpato con la flotta da casa sua, avesse raggiunto Lemno con il vento di tramontana. Questo vento infatti sorgendo da settentrione tiene la direzione contraria per chi parte da Atene. Milziade, non avendo tempo di trattenersi, indirizzò la rotta verso la sua meta e arrivò nel Chersoneso."

// function generatestats(string) {
//     const charnumber = string.length
//     const cleanarrayfromstring = cleanstringandconverttoarray(string)
//     const wordnumber = cleanarrayfromstring.length
//     const wordoccurrency = generateoccurrencycount(cleanarrayfromstring)
//     const charoccurrency = generateoccurrencycount([...string])
// }

// function cleanstringandconverttoarray(string) {
//     const cleanedstring = string.replace(/'/g, " ").replace(/,/g, "").replace(/\./g, "").replace(/;/g, "").replace(/:/g, "")
//     const stringarray = cleanedstring.split(" ")
//     return stringarray
//}

// console.log("The char count is: " + charnumber);
// for (const key in charoccurency) {
//     if (Object.hasOwnProperty.call(charoccurency, key)) {
//         const count = charoccurency[key];
//         console.log("the char " + key + " appears " + count + (count === 1 ? " time" : " times"));

//     }
// }
// console.log("-----------------------------------");
// console.log("The word count is: " + wordnumber);
// for (const key in wordoccurency) {
//     if (Object.hasOwnProperty.call(wordoccurency, key)) {
//         const count = wordoccurency[key];
//         console.log("the word " + key + " appears " + count + (count === 1 ? " time" : " times"));

//     }
// }

// function generateoccurrencycount(stringarray) {
//     const occurrencycount = {}
//     for (const word of stringarray) {
//         if (occurrencycount[word]) {
//             occurrencycount[word]++
//         } else {
//             occurrencycount[word] = 1
//         }
//     } return occurrencycount
// }

// generatestats(text)

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

function promptMe() {
    let useradjective = prompt("Enter word to search")
    alert(countawordandindex(textsplit, useradjective))
}
