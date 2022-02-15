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