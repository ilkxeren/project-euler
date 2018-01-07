// Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

function sumOfNaturalNumbers(number){
  var sum = 0;

  for (var i = 1; i < number; i++){
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
    }
  }
  return sum;
}
console.log(sumOfNaturalNumbers(100));



// sum = 0
// # n = 0

// # 1000.times do
// #   if n %3 == 0 || n % 5 == 0
// #     sum = sum + n 
// #     p sum
// #   else

// #   end
// #     n += 1
// # end
// # p sum








// ----------------------------------------------------------------------------


// Problem 6
// function sumSquare(number){
//   var sumSquareSum = 0;
//   var squareSum = 0;
//   for (var i = 1; i <= number; i++){
//     sumSquareSum =  sumSquareSum + i;
//     squareSum = squareSum + ( i * i );
    
//   }
//   return (sumSquareSum * sumSquareSum) - squareSum;
// }
// console.log(sumSquare(10));