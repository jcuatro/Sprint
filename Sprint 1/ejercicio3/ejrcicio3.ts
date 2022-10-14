let word: any = window.prompt("Inserte una palabra de 6 o más letras");
let cut: string = word.substring(0, 2);
let cut2: string = word.substring(word.length, word.length -2);
let newWord: string = cut + cut2;
if (word.length < 6 ) {
    alert("Niet");
    word = window.prompt("Inserte una palabra de 6 o más letras");
}

console.log(word);
console.log(cut);
console.log(cut2);
console.log(newWord);