let mail: any = prompt("Introduce un correo electrónico")?.trim();
let special = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/);
let passVal = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/);
let pass = prompt("Introduce una contraseña");

function validate(mail: string, special: any) {
    let toValidate = special.test(mail);
    let dom:any = /^([^]+)@(\w+).(\w+)$/.exec(mail);
    if (toValidate == true) {
        alert("El correo es válido");
    } else {
        alert("El correo no es válido");
        }
    console.log(mail);
    console.log("Usuario: "+dom[1]);
    console.log("Dominio: "+dom[2]);
}
validate(mail, special);

function passValidation(pass: any){
  let toValidatePass = passVal.test(pass);
  if (toValidatePass == true) {
    alert("la contraseña es válida");
} else {
    alert("la contraseña no es válida");
    }
  console.log(pass);
}

passValidation(pass);