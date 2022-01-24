//objects are key-value association, key is always a string, value can be anything even another object/array
let point = { x: 2, y: 3 } //[]arrays, {}objects

let student1 = { name: "tizio", surname: "caio", yob: 1580, married: false }

let student2 = { name: "tizia", surname: "caia", yob: 2444, married: false }

let classe = { name: "programmazione frontend", students: [student1, student2] }

let andrea = { name: "Andrea", surname: "Asioli", "class di cui è docente": classe /*this last one is another object*/ }

console.log(andrea.surname); //with keyword you can filter
console.log(andrea["class di cui è docente"]); //other spelling, key is in quotes if the name needs spaces or special characters

let nomestudente1 = student1.name
console.log(nomestudente1);

student1.name = "poop"
console.log(student1);

console.log(student1.titolodistudio);
student1.titolodistudio = "Diploma di maturità"; //added new key value assoc
console.log(student1);

for (const key in student1) {
    if (Object.hasOwnProperty.call(student1, key)) {   //makes sure they actually exist
        const element = student1[key];
        console.log(key + ": " + element);
    }
}

console.log(JSON.stringify(andrea));  //turns it into json


let objectinstring = '{"name":"Andrea","surname":"Asioli","class di cui è docente":{"name":"programmazione frontend","students":[{"name":"poop","surname":"caio","yob":1580,"married":false,"titolodistudio":"Diploma di maturità"},{"name":"tizia","surname":"caia","yob":2444,"married":false}]}}'

let andreacopy = JSON.parse(objectinstring)  //turns it into js

console.log(andreacopy);

function calcolatriangolorettangolo(catetomaggiore, catetominore, ipotenusa) {
    let per = catetomaggiore + catetominore + ipotenusa;
    let ar = (catetomaggiore * catetominore)/2
    return{perimetro: per, area: ar}
}
let dimensionitriangolo = calcolatriangolorettangolo(4, 3, 5)

console.log("il triangolo ha il perimetro di: " + dimensionitriangolo.perimetro + " e l'area: " + dimensionitriangolo.area);