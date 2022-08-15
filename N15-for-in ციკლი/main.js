const car ={

  brand:`Ferrari`,
  model:`la Ferrari`,
  color: `red`,
  year:`2012`,
  price:100000
}
console.log(car.brand);
//ferary

console.log(car[`brand`]);
//ferry
//პირველი ნაწილი
// for( const prop in car ) {
// console.log(prop);
// }

//ბეჭდავს ყველას მაგ 
//brand
// model
// color
// year
// price


//2 ნაწილი
// for( const prop in car ) {
// console.log(car[prop]);
// }
//ანუ აქ უკვე ბრენდის სახელი და ასე შემდეგ გამოაქ 
// Ferrari
// la Ferrari
// red
// 2012
// 100000

//მესამე ნაწილი
for(const prop in car){
  console.log(`თვისება ${prop}} მნიშვნელობა ${car[prop]}`);
}
//გამოიტანს ორივეს 