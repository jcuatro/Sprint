let sentence3: any = prompt("Inserte una frase de almenos 4 palabras");
let userInput: any = prompt("Inserte una palabra");
let words3 = sentence3.split(' ');


if(words3.length < 4){
        alert("Frase no válida")
        sentence3 = prompt("Vuelva a insertar la frase");
    } else {
        alert("Frase válida");
        if(words3.includes(userInput)){
          alert("Tu palabra está contenida en la frase");
    } else {
      alert("No vale");
    }
 }