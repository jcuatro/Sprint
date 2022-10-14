class Student {
    private firstName: string;
    private lastName: string;
    private age: number;
    private score: string;


    constructor(fistName: string | any, lastName: string | any, age: number | any, score:  string | any) {
        this.firstName = fistName;
        this.lastName = lastName;
        this.age = age;
        this.setScore(score);
        }

    public getFirstName() {
        return this.firstName;
    }

    public getLastName() {
        return this.lastName;
    }


    public getCompleteName() {
        return `Tu nnombre es: ${this.firstName} ${this.lastName}`
    }


    public getAge() {
        return this.age;
    }

    public getScore() {
        return this.score;
    }

    public setFirstName(theName : string) {
        this.firstName = theName;
    }

    public setLastName(theLastName : string) {
        this.lastName = theLastName;
    }

    public setAge(theAge: number) {
        this.age = theAge; 
    }

    public setScore(theScore : string) {
    this.score = this.getMedia(theScore);
    }

    public getMedia(theScore){       
        let x = 0;
        x = parseFloat(grade);
        switch(true)  {
            case 0 >= x:
        theScore="Muy deficiente";
        break;
            case 4 > x:
        theScore="Insuficiente";
        break;
            case 6 > x:
        theScore="Suficiente";
        break;
            case 7 > x:
        theScore="Bien";
        break;
            case 9 > x:
        theScore="Notable";
        break;
            case 10 >= x:
        theScore = "Sobresaliente";
        break;  
  default:
    alert("Nota no válida")
    }
return theScore;
    }
}


let classMates: number | any = prompt("¿Cuantos alumnos hay en clase?");
let studentClass: any = [];
let students:Student;



for (let i = 0; i < classMates; i++) {
    let studentName = prompt("Dime tu nombre");
    let studentSurname = prompt("Dime tu apellido");
    let studentAge =  prompt("Dime tu edad");
    let studentMark =  prompt("Dime tu nota");
    students = new Student(studentName, studentSurname, studentAge, studentMark);
    studentClass.push(students);
}

console.log(studentClass);