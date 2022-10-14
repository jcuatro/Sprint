let x = 0;
let grade: any = prompt('Introduce la nota de tu examen');
x = parseFloat(grade);

switch(true)  {
  case 0 >= x:
    console.log("Muy deficiente");
    break;
  case 4 > x:
    console.log("Insuficiente");
    break;
  case 6 > x:
    console.log("Suficiente");
    break;
  case 7 > x:
    console.log("Bien");
    break;
  case 9 > x:
    console.log("Notable");
    break;
  case 10 >= x:
    console.log("Sobresaliente");
    break;  
  default:
    alert("Nota no válida")
}
console.log(x);