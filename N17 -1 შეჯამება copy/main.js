 // პირველი გაკვეთილის გახსენება 

  var  global= ` var-გლობალური ცვლადი`;
  const block_cvladi =` const- ეს არის ბლოკური ცვლადი რომელის მნიშვნელობა არ ივლება`;
  let let_block=` let- ბლოკური კონკრეტულ ადგილას ვრცელდება `
   console.log(global);
   console.log(block_cvladi);
   console.log(let_block);
     

   //გაკვეთილი მეორე გახსენება

   //გავიაროთ object

  const person ={
 name: `maya`,
 lastname: `kvaratskhelia`,
 age:`25 წლის`,
 fullName: function() {
  return `${this.name} ${this.lastname} ${this.age}`;
 }
    }
    console.log(person.fullName());

    //გავიხსენეთ ფუნქციასთანე ერთად ობიექტთან მუშაობა
// კიდევ ერთს გავაკეთებ უკეთ დასამახსოვრებლად

const sezoni=  {
  gazafxuli:`მარტი, აპრილი ,მაისი`,
  zafxuli: `ივნისი, ივლისი, აგვისტო`,
  Shemodgoma: `სექტემბერი, ოქტომბერი, ნოემბერი`,
  zamtari:`დეკემბერი, იანვარი, თებერვალი`,
  yvela_sezoni: function() {
    return ` გამოტანე ყველა თვე: ${this.gazafxuli}: ${this.zafxuli}:${this.Shemodgoma}: ${this.zamtari}.`
  }
}
console.log(sezoni.yvela_sezoni());


//მესამე გახსენება ძმა
//მასივები

const ferebi = ['თეთრი', 'შავი', 'წითელი', 'მწვანე', 'და სხვა ']
console.log(ferebi);
console.log(ferebi[4]);

// ფუნქცია 

 function amindi(pasuxi, parametri1, parametri2){
 console.log(`როგორი ამიდია დღეს ? ${pasuxi} : ${parametri1} ${parametri2}`);
 }
 amindi(`პასუხი`, `დღეს ძალიან მაგრად `, `წვიმს`)