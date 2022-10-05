// პირველი

let name = `სახელი`;
const surname = `გვარი`;
var age =`ასაკი`;

//console.log(`${name} ${surname} ${age}`);



//  მეორე  ობიექტი 

var monacemebi = {
  saxeli: `maya`,
  gvari: `kvaratskhelia`,
  asaki: 25,
  feri: `blue`,
  maill: `mayakvaratskhelia9@gmail.com`,
  fullName: function () {
    return this.saxeli + " " + this.gvari + " " + this.asaki + " " + this.feri + " " + this.maill;
  }

};
// console.log(monacemebi.fullName());

//maya kvaratskhelia 25 blue mayakvaratskhelia9@gmail.com
// გამოაქ ასე 

// მეორე მაგალთი ობიექტზე

const car = {
  carName:` მერსედესი`,
  carage: 1997,
  carcolor: `წითელი`,
  fullName_car: function () {
    return this.carName + ' ' + this.carcolor + ' ' + this.carage;
  }

}
//console.log(car.fullName_car());

//მესამე  მასივი 

const all_color = [`წითელი`,`ყვითელი`,`მწვანე `,`შავი`,`თეთრი`,`იასამნისფერი`,`ლურჯი`,`ყავისფერი`,`სტაფილოსფერი`];
//console.log(all_color);

for (let i = 0; i < all_color.length; i++) {
 //console.log(all_color[i]);
}
// წითელი
// ყვითელი
// მწვანე 
// შავი
// თეთრი
// იასამნისფერი
// ლურჯი
// ყავისფერი
// სტაფილოსფერი


const xili =[`ვაშლი`, `მსხალი `,`ატამი`, `ბალი`, `ბანანი`, `ვაშლატამა`, `ქლიავი`, `ჟოლო`];

for(let i = 0; i < xili.length; i++){
 //console.log(xili[i]);
}

//მეოთხე ფუნქცია

function akademia(x) {
  console.log(`ააწყვე აკადემიის საიტი  ${x} ცალი `);
}
akademia(25)

