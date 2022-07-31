const car ={
  brand: "ferrari",
  model: "la ferrari",
  year: "2014",
  color:"red",
  fullName: function () {
    return `${this.brand} ${this.model} ${this.year} ${ this.color}`; 
  }
};
console.log(car.brand);
  // ferrari

  console.log(car["brand"]);

  //ferrari
  // ასე რომ ვთქვათ ორი ჩანაწერის გაკეთება შეიძლება 
  // და ერთანირაიდ გამოიტანს ორივეს.

  console.log(`ჩემი ფავორიტი მანქანა არის ${car.brand}, რომელიც გამოშვებულია ${car.year} წელს`);

  console.log(car.fullName());
 // გამოიტანს ფუნციაში რაც გვაქ ყველაფეფერს დააბრუნებს და ასევე 
 //this ამ ობიექსტ აღწერს და ვეუბნებით რომ გამოიტანოს კონკრეტულად ეს
 