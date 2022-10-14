let row: any = "Caminante no hay camino, se hace el camino al andar, Al andar se hace camino y al volver la vista atrás se ve la senda que nunca se ha de volver a pisar.";
let rowPart = row.split(",");
let rowI;
let vocal = prompt("Introduce una vocal");

let finalRow = rowPart.join(",");
let firstVocal = finalRow.indexOf(vocal);
let lastVocal = finalRow.lastIndexOf(vocal);

function replace(finalRow: any){
        rowI = rowPart[1].replaceAll("a", vocal).replaceAll("e", vocal).replaceAll("o", vocal).replaceAll("u",vocal).replaceAll("i", vocal);
        rowPart[1] = rowI;
        console.log("elemento array",rowPart[1]);
        return finalRow;
}

let result = replace(finalRow);
console.log(replace);
console.log("La primera posición de "+vocal+" es: "+firstVocal);
console.log("La última posición de "+vocal+" es: "+lastVocal);
