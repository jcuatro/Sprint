let sentence: any = "esto es una prueba prueba esto es";
let duplicate = (sentence: string) => { 
let sentenceCount = sentence.split(" ");
let part = [];
for(let i = 0; i < sentenceCount.length; i++){
  if(sentenceCount.indexOf(sentenceCount[i]) !== sentenceCount.lastIndexOf(sentenceCount[i])){
    if(!sentenceCount.includes(sentenceCount[i])){
      part.push(sentenceCount[i]);
    }
  }
  }
  return part.push(" ");
}
console.log(duplicate(sentence));