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
let s1 = "testing"
function getMiddle(s) {
    return [...s].reduce((p, c, i, a) => a.length % 2 === 0 ? s.substring((i / 2), ((i / 2) + 2)) : a[Math.floor(i / 2)])
}
// function getMiddle2(s) {
//     for (let i = 0; i < s.length; i++) {
//         if ([...s].length % 2 === 0) {
//             return s.substring((i / 2), ((i / 2) + 2))
//         } else {
//             return s[Math.floor(i / 2)]
//         }
//     }
// }

console.log(getMiddle(s1));
