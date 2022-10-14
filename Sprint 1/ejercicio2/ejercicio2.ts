let sentence2: any = "Todos los asuntos tienen dos asas: por una son manejables, por la otra no. -Epicteto";
let count = 0;
let words2 = sentence2.split(" ");

let numLetras = sentence2.replaceAll(" ", "").replaceAll(":", "").replaceAll(",", "").replaceAll(".", "").replaceAll("-", "").length;

for (let i = 0; i < sentence2.length; i++) {
    if(sentence2.charAt(i) == " "){
        count++;
    }
}


console.log("El número de letras es: "+numLetras);
console.log("El número de espacios en blanco es: "+count);
console.log("El número de palabras es: "+words2.length);