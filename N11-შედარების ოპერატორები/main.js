const sample=x=>{
  return Boolean(x>10);
}
console.log(sample(5));
//false 
//მცადარია რადგან 5 მეტი არაა 10 ზე


const samplee=x=>{
  return Boolean(x<10);
}
console.log(samplee(5));



const sampleee=x=>{
  return Boolean(x<=10);
}
console.log(sampleee(10));
//true

const samplee1=x=>{
  return Boolean(x<=10);
}
console.log(samplee1(11));
//false

const samplee2=x=>{
  return Boolean(x===10);
}
console.log(samplee2(10));
//true



const samplee3=x=>{
  return Boolean(x===10);
}
console.log(samplee3(11));
//false

const samplee4=x=>{
  return Boolean(x==10);
}
console.log(samplee4(11));
//false

const samplee5=x=>{
  return Boolean(x==15);
}
console.log(samplee5(20));
//false



