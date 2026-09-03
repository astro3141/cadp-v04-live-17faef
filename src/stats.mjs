export function mean(xs) {
  if (xs.length === 0) return 0;
  return xs.reduce((a, b) => a + b, 0) / xs.length;
}

export function product(xs) {
  if (xs.length === 0) return 1;
  return xs.reduce((a, b) => a * b, 1);
}
