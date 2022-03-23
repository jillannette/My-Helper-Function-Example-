// i inch = 2.54 cm

function convertInchesToCentimeters (number) {
  return number * 2.54;
}

console.log(convertInchesToCentimeters(10));

function getInches(centimeters) {

  return convertInchesToCentimeters (centimeters);
}
console.log(getInches(95));
