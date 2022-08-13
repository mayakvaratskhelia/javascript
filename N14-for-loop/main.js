const cars = [`Ferary`, `porshe`, `mercedes`, `BMW`];

// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars[3]);
// გამოიტანს ყველას ინდექსებით ამის შემოკლებული ვერსია არის ფორი რომელიც სულ გჭირდება
 
//loop- არის ციკლი
console.log(cars.length);
//4 ცალი არის

for (let i = 0; i < cars.length; i++) {  
console.log(cars[i]);
console.log(i); // index
}
// გამოიტანს ყველას 
// ყოველი შესრულებისას იმატებს ერთით .
//ადარებს თუ პირობა სანამ  იზე ნაკლები იქნება პირობა გაიზრდება ერთით ..
