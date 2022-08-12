const sample=x=>{
  console.log(x);
}
sample(15);
//15 


const test1=x=>{
  if (x >10){
    console.log(`${x} მეტია 10-ზე`);
  }else{
    console.log(`${x} ნკლებია 10-ზე`);
  }
}
test1(15);
//15 მეტია 10-ზე

const test2=x=>{
  if (x >10){
    console.log(`${x} მეტია 10-ზე`);
  }else{
    console.log(`${x} ნაკლებია 10-ზე`);
  }
}
test2(5);
// 5 ნკლებია 10-ზე


console.log(Boolean(15>10)); //true

const test3=x=>{
  if (x >10){
    console.log(`${x} მეტია 10-ზე`);
  }else if (x==10){ 
    console.log(`${x} ტოლია 10-ის`);
  }
  else{
    console.log(`${x} ნაკლებია 10-ზე`);
  }
}
test3(10);
// 10 ტოლია 10-ის
