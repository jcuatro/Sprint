class Game {
    dice: number;
    money: number;
  
    constructor() {
          this.dice = Math.floor(Math.random() * (6) +1);
          this.money = 50;
          }
  
    public getDice(){
      return this.dice;
    }
  
    public getMoney(){
      return this.money;
    }
  
    public setDice(){
      this.dice = Math.floor(Math.random() * (6) +1);
      console.log("El dado: "+ this.dice);
    }
  
    public setMoney(theMoney: number){
      this.money = theMoney;
    }
  
    public toString(){
      return "El dinero es: " + this.money;
    }
  }
  
  let game = new Game();
  
  
      while (game.getMoney() < 200  && game.getMoney() > 0) {
        let deal: any = prompt("¿Cuanto vas a apostar?");
        let throwDice: any = prompt("Dime un número entre 1 y 6");
        game.setDice();
         if(throwDice == game.getDice()){
            game.setMoney(game.getMoney() + parseInt(deal));
            console.log(game.toString());
        } else {
          game.setMoney(game.getMoney() -  parseInt(deal));
          console.log(game.toString());
        }
       }