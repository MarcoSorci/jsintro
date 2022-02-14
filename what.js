const scores = ["3:1", "2:2", "0:1", "4:2", "1:4", "1:1", "3:2", "1:2", "3:4", "1:3"]

function points(games) {
    let newarray = []
    for (let i = 0; i < games.length; i++) {
        const element = games[i];
        let x = element[0]
        let y = element[2]
        if (x>y) {
            newarray.push(3)
        } else if (x<y) {
            newarray.push(0)
        } else if (x=y) {
            newarray.push(1)
        }
    } return newarray.reduce((p,c)=>p+c)
        
}

console.log(points(scores));