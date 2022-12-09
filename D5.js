/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

console.log(pets)
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets);

for(let i =0; i<pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.

pets.reverse();
console.log(pets)

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

pets.push(pets.shift());  

console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
let licensePlate = [1,2,3]
cars[i] =licensePlate

const licence = "licence"
const plate = "plate"

for(i=0; i < cars.length; i++) {
  cars[i].licensePlate =5;
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
let car = {
  brand: "fiat",
  model: "punto",
  color: "blue",
  trims: ["metano", "evo"],
};

car.splice(3,0, car);
console.log("punto" + cars);
 
for (let i = 0; i<cars.length; i++); {
  cars[i].trims.pop();
}


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

while(i < 13) {
  console.log(numericArray[i]);
  i++;
  if(numericArray[i]===32){
    console.log("cerca")
    break;
  }
}

//
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = [g, n, u, z, d]
