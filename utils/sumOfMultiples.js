function sumOfMultiples(n, m) {
  if (n > m) return "INVALID";
  let sum = 0;
  for (let i = 0; i < m; i += n) {
    sum += i;
  }
  return sum;
}

module.exports = sumOfMultiples;
