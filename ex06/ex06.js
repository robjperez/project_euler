square = (v) => v * v;
identity = (v) => v;

loopSum = (value, sumFunc) => {
  var sum = 0;
  for (var i = 1; i <= value; i++) {
    sum += sumFunc(i);
  }
  return sum;
}

sumOfSquares = (value) => {
  return loopSum(value, square);
}

squareOfSum = (value) => {
  var value = loopSum(value, identity);
  return value * value;
}

function* squareDiff() {
  var index = 1;
  while(true) {
    yield squareOfSum(index) - sumOfSquares(index);
    index++;
  }
}

var gen = squareDiff();
for (var i = 1; i <= 100; i++) {
  console.log(i + ": " + gen.next().value);
}
