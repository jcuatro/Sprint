let list:string[] = ["aguacate", "disfraz", "huerto", "baden", "tortilla", "billar", "francés", "dieresis", "aceituna", "almendra", "hígado", "frente", "tiempo", "frenar", "diferencia", "hueso", "burro", "terreno"];
let orderedList = list.sort();

for (let i = 0; i < list.length; i++) {
  orderedList[i] = list[i][0];
}
console.log(list);
console.log(orderedList);