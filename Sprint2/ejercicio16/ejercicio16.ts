class Product {
  private name: string;
  private price: number;
  private amount: number;

  constructor(response: newProduct) {
    this.name = response.name;
    this.price = response.price;
    this.amount = response.amount;
  }
}
   interface newProduct{
    name:string | any;
    price:number | any;
    amount:number | any;
  }

let shoppingCart:Product[] = [];
let add: boolean = true;

while(shoppingCart.length < 3 && shoppingCart.length < 10 && add){
  let newFood:newProduct = {
    name:"",
    price:0,
    amount:0
  };
  newFood.name = prompt("¿Que articulo quieres añadir a tu cesta de la compra?");
  newFood.price = prompt("¿Cuanto cuesta el producto");
  newFood.amount = prompt("¿Cuantos quieres comprar?");
  shoppingCart.push(new Product(newFood));
  

  if(shoppingCart.length >= 3){
    let buy: any = prompt("¿Desea seguir comprando?");
    if(buy == "si"){
      for(let i=0; i < 7; i++){
      newFood.name = prompt("¿Que articulo quieres añadir a tu cesta de la compra?");
      newFood.price = prompt("¿Cuanto cuesta el producto");
      newFood.amount = prompt("¿Cuantos quieres comprar?");
      shoppingCart.push(new Product(newFood));
       }
       alert("Gracias por su compra");
      }
      if(buy == "no"){
      alert("Gracias por su compra");
      }
  }
}
console.log(shoppingCart);