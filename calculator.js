// Absolute value
function getAbsoluteValue(num) {
    return Math.abs(num);
  }
  
// Power calculation
function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
  }
  
 // Square root
function findSquareRoot(num) {
    return Math.sqrt(num);
  }
  
// Max and Min Finder
function findMax(numbers) {
    return Math.max(...numbers);
  }
  
function findMin(numbers) {
    return Math.min(...numbers);
  }
  
// Random integer in range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
// Custom rounding
function roundToDecimals(num, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round(num * factor) / factor;
  }

// Kevin's Test Kitchen
console.log("Absolute value of -45.67:", getAbsoluteValue(-45.67));
console.log("5 raised to the power of 3:", calculatePower(5, 3));
console.log("Square root of 144:", findSquareRoot(144));

const sampleNumbers = [3, 78, -12, 0.5, 27];
console.log("Max value:", findMax(sampleNumbers));
console.log("Min value:", findMin(sampleNumbers));

console.log("Random number between 1 and 50:", getRandomInt(1, 50));
console.log("23.67891 rounded to 2 decimals:", roundToDecimals(23.67891, 2));
