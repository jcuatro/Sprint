let gradeInput: string | null = prompt("Escribe la nonta de tu examen");
let grade = parseInt(gradeInput);

switch(grade){
  case 0-3:
  console.log("Muy deficiente");
  break;
  case 4-5:
  console.log("Insuficiente");
  break;
  case 5-6:
  console.log("Suficiente");
  break;
  case 6-8:
  console.log("Bien");
  break;
  case 8-9:
  console.log("Notable");
  break;
  case 9-10:
  console.log("Sobresaliente");
  break;
}