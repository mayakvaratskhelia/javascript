 //const cars = [ 'feraari', 'lamborgini', 'porshe']
//                0           1             2
// მასივში იწყება ინდექსი ნულიდან 

// console.log(cars[1]);
// lamborgini

// const cars = [ 'feraari', 'lamborgini', 'porshe', ['kavasaki', 'suzuki']]
// //                                                    0               1
// //                   0       1             2                    3

// console.log(cars[3]);
// // [ 'kavasaki', 'suzuki' ]
// console.log(cars[3][1]);
// //suzuki

// const cars = [ 
//   'feraari', 
// 'lamborgini', 
// 'porshe', 
// [
//   'kavasaki', 
//   'suzuki'
// ],
// {
// model: 'model 1',
// color: 'white'
// }
// ]
// console.log(cars[4]);

// { model: 'model 1', color: 'white' }

// console.log(cars[4].model);
// // model 1

// console.log(cars.length);
// ხუთი ინდექსი
//length გვეუბნება რამდენი არის სულ ... 

// მასივი არის ობიექტის ტიპი.


const cars = [ 
  'feraari', 
'lamborgini', 
'porshe'
]

const brands ={
  name: 'sony',
  color: 'red',
}
 
// console.log(typeof(cars));
// //object
// console.log(typeof(brands));
// //object


console.log(Array.isArray(cars));
//true - ანუ მასივია

console.log(Array.isArray(brands));
//false- ანუ  არა მასივი 
// ეს არის კონკრეტული მეთოდი რომ გავიგოთ არის თუ არა მასივი 




 // მეორე მეთოდი 
  //ანუ 
  console.log(brands instanceof Array);
  // false


  //  დღეს გავიარე რა არის მასივი რა ტიპის არის მასივი, როგორ შევინახოთ მონაცემები
  // როგორი მონაცემები ინახება
  // სტრინგი  მასივი , ობიექტი და ყველაფრის შენახვა შეიძლება . 