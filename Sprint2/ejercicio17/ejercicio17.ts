let input: any = prompt("Inserte un número positivo");
let digits = input.length;
let sum = 0;
let temp: any = input;
let x: boolean = false;

  function amstrong(temp: any, sum: number, x: boolean){
    x;
    while(temp > 0) {
    let numbers = temp % 10;
    sum += numbers ** digits;
    //Quitar el último digito del número hasta salir del bucle
    temp = parseInt(temp / 10);
  }
  
  if(sum == input){
    x = true;
  } else {
    x = false;
  }
  return x;
}

if(amstrong(temp, sum, x)){
    console.log(input+" es un número de amstrong");
  } else {
    console.log(input+" no es un número de amstrong");
  }