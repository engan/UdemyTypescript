type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function literal(
    // input1: number | string,
    // input2: number | string,
    // resultConversion: 'as-number' | 'as-text'

    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
  ) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
      result = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
  }
  
  const combinedAgesLit = literal(30, 26, 'as-number');
  console.log(combinedAgesLit);
  
  const combinedStringAges = literal('30', '26', 'as-number');
  console.log(combinedStringAges);
  
  const combinedNamesLit = literal('Max', 'Anna', 'as-text');
  console.log(combinedNamesLit);

  
// The union type allows either an User object (with a "name" property) OR a string. 
// You can switch values how often you want.
type User = { name: string } | string;
let u1: User = {name: 'Max'};
u1 = 'Michael';