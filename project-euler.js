function sumSquare(number){
  var sumSquareSum = 0;
  var squareSum = 0;
  for (var i = 1; i <= number; i++){
    sumSquareSum =  sumSquareSum + i;
    squareSum = squareSum + ( i * i );
    
  }
  return (sumSquareSum * sumSquareSum) - squareSum;
}
console.log(sumSquare(10));