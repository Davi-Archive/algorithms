/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
  const c = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      c[0] = c[0] + 1;
    }
    if (a[i] < b[i]) {
      c[1] = c[1] + 1;
    }
  }
  console.log(c);
}

compareTriplets([1, 8, 3], [4, 5, 6]);
