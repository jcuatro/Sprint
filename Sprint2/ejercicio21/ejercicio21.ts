let tempC: any = prompt("¿Que temperatura hace en Murcia en centígrados?");
let fahrenheit: any = prompt("¿Que temperatura hace en Murcia en fahrenheit?");
let celsius = parseFloat(tempC);
let tempF = 0;

function conversorF(tempF: number){
  tempF = ((celsius * 9 / 5) + 32);
  
  switch(false) {
    case 14 <= tempF:
    case tempF > 32:
    console.log("Temperatura baja");
    break;

    case 32 < tempF:
    case tempF > 68:
    console.log("Temperatura adecuada");
    break;

    case 68 <= tempF:
    case tempF >= 96:
    console.log("Temperatura alta");
    break;

    default:
    console.log("Temperatura desconocida");
    break;

  }
  return tempF;
}

function conversorC(fahrenheit: number){
  fahrenheit = ((fahrenheit -32) / 1.8);
  return fahrenheit;
}

console.log(tempC +"Cº son "+ conversorF(tempF)+"Fº");
console.log(fahrenheit+"Fº son "+conversorC(fahrenheit)+"Cº");