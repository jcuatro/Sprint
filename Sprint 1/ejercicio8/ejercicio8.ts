class Person {
    nombre: string;
    apellido: string;
    sexo: string;
    nota_media: number;

constructor(nombre: string | any, apellido: string | any, sexo: string | any, nota_media: number | any) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.sexo = sexo;
    this.nota_media = nota_media;
    }
}

let clase: any = [];
let numAlumnos: number | any = prompt("¿Cuantos alumnos hay en clase?");


for (let i = 0; i < numAlumnos; i++) {
    let studentName = prompt("Nombre")
    let studentSurname =prompt("¿Apellido?");
    let studentSex =prompt("¿Sexo?");
    let studentMark =prompt("¿Nota media?");
    let alumno = new Person(studentName, studentSurname, studentSex, studentMark);
    clase.push(alumno);
}

console.log(clase);
