let people = [
    {"name": "Peter", "age": 20},
    {"name": "Rafa", "age": 50},
    {"name": "Pere", "age": 14},
    {"name": "Ruben", "age": 40},
    {"name": "Francesco", "age": 13},
    {"name": "Antonio", "age": 16},
    {"name": "Raul", "age": 40},
    {"name": "Naruto", "age": 22}
];

let find: string | any = prompt("Escribe algo");
let search = people.filter(people =>  people.name.toLowerCase().includes(find.toLowerCase()));
let ages: any;
let plus: number | any = 0;
let avg: number = 0;

for(let i=0; i < search.length; i++){
  ages = search[i].age;
   plus += ages;
}
  avg = plus / search.length;


console.log(search);
console.log("La media de edad es: "+avg.toFixed(2));