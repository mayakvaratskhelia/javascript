// let name = "maya"
// let name = 'maya'
// ანუ ბჭყალების გამოყენება 

// let name = "maya";
// console.log(name);

// let name = "we are \"kartvelelebi\" from Georgia";
// console.log(name);
// ეს ვარიანტი არის სწორი რადგან აქ სიტყვა ქართველები რომ არ აერიიოს ბჭყალებში სლეშით არის გამოყოფილი
// let name ='"we are "kartvelelebi" from Georgia';
// console.log(name);
// ეს ვარიანტიც არის სწორი რადგან თავისუფლად კითხვა შეუძლია სხვადასხვა ბჭყალბის გამოყენებით ერთნაირი ბრჭყალები
// აბნევს და მიტომ ვერ კითხულობს

// let name = "we are "kartvelelebi" from Georgia";
// console.log(name);
// ხოლო ამ შემთხვევაში გამოიტანს არასწორს რადგან ბჭტალის ბოლო და თავი ვერ გაურკვევია

// let name = 'we are \ ';
// console.log(name);
 // ამ დროს გამოიტანს მხოლოდ we are  და არა სლეშს მაგრამ თუ ორი სლეში ექნება ბოლოში გამოიტანს ერთ სლეშს



 //სახელი გვარის გამოტანა
//  let name='maya';
//  let lastName='kvaratskhelia';

//  let fullName=`ჩემი სახელია ${name}, ხოლო გვარია ${lastName}`;
//  console.log(fullName);
// ეს გამოიტანს სახელს და გვარს ..............
// ამ ჩანაწერს ქვია სტრინგის ინტერკოლაცია თუ ინტერპოლაცია რაცხა ეგ 

// `${}` ბექთიქებს ვეძახით


//number
//  let x = 1245e5;
//  console.log(x);
 // 124500000 ანუ ხუთცალ ნულიანს ამატებს

//  let x=5;
//  let y = 10;
//  let z= x+y;
//  console.log(z);
 // გამოიტანს 15

//  let x=5;
//  let y = '10';
//  let z= x+y;
//  console.log(z);
//  // გამოიტანს 510 რადგან 10 არის string
  
//  let x='5';
//  let y = '10';
//  let z= x-y;
//  console.log(z);
// ანუ ეს ტაქტიკა string შეიძლება წაიკითხოს ნამბერად გამოკლებისას გაყოფისას და გამრავლებისას
  
// let x=2;
// let y = 0;
// let z= x/y;
// console.log(z)
// გამოიტანს  infinity   
// გავარკვიოთ რა ტიპის არის 
// console.log(typeof(x));   // number
// let name = 'maya';
// console.log(typeof('name')); // string



let x=10;
console.log(typeof(x)); // number
x='maya';

console.log(typeof(x)); // string
// ანუ ორივვეს წაიკითხავს  