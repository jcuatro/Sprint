let randomWords: any = [];
let finalWords: any = [];
let listWords:any = prompt("Escribe una palabra");

while(listWords != 'Stop'){
  listWords = prompt("Escribe una palabra");
  randomWords.push(listWords);
  
  if (!finalWords.includes(randomWords)) {
      finalWords.push(listWords);
    }
}

finalWords.pop();
console.log(finalWords);