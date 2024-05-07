
let resultLine = '';

for (let i = 1; i <= 20; i++) {
  let output = '';

  if (i % 3 === 0) {
    output += 'Fizz';
  }

  if (i % 5 === 0) {
    output += 'Buzz';
  }

  resultLine += (output || i) + ', ';
}

// Remove the trailing comma and space at the end of string line
resultLine = resultLine.slice(0, -2);

console.log(resultLine);