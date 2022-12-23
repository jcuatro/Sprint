async function asyncCall() {
    const result = await localStorage.getItem('resultado');
    console.log(result);
}
asyncCall();
let sentence: any = prompt("Escribe lo que quieras");
localStorage.setItem('resultado', sentence);