// console.log(`hello word`);

// var x =10;
// function printVar(){
//   console.log(x);
// }
// console.log(x);
// printVar(x);

//ესეიგი აქ ხდება გლობალური ცვლდადით ფუნქციაში გამოძახება შიდაში კონსოლოგში იქსი გამოაქვს ბლოკის გარეთაც და  
//ბეჭდავს ორგან რადგან
// ცვლადი არის გლობალური


function printVar(){
  var x =10;
  console.log(x);
}
console.log(x);
printVar(x);