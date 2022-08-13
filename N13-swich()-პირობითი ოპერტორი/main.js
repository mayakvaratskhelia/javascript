const flowers=flower=>{
  switch (flower) {
    case `ვარდი`:
      console.log(`${flower} არის წითელი`);
      break;
  //ბრეიქი ეუბნება რაც არუნად ეწეეროს აქ გაჩერდი თუ არა გაგრძელდება სემოწმება კოდის
    case `ია`:
      console.log(`${flower}  არის იისფერი`);
      break;
  
    case `გვირილა`:
      console.log(`${flower}ეს არის თეთრი, ყვითელი გულით`);
      break;
  
    default:
      console.log(`გთხოვთ აირჩიოთ სხვა ფერი`);
      break;
  }
}
flowers(`ვარდი`)
//ვარდია რის წითელი
flowers(`ია`)
//ია არის იისფერი

flowers(`გვირილა`)
//გვირილაეს არის თეთრი, ყვითელი გულით
flowers(`ყაყაჩო`)
//გთხოვთ აირჩიოთ სხვა ფერი
