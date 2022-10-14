let sentence = window.prompt('inserte una frase');
let words = " ";
let divisor =  sentence != null ? sentence?.split(' '): '';
if (sentence != null && sentence.length >= 4) {
    for (let i = 0; i < divisor.length; i++) {
        if (i % 2 == 0) {
            words += divisor[i].toUpperCase()+' ';
        }else{
            words += divisor[i].toLowerCase()+' ';
        }
    }
} else {
    alert('frase no valida');
}
console.log(sentence);
console.log(divisor);
console.log(words);