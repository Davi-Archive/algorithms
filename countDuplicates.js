function duplicateCount(text) {
  let arr = text.split("");
  let total = 0;
  let oldRes;
  for (let i = 0; i < arr.length; i++) {
    let res = arr.filter((item) => item === arr[i]);
    if (res.length > 1 && res !== oldRes) {
      oldRes = res;
      console.log(oldRes);
    }
  }
}

/*
duplicateCount(""); //, 0;
duplicateCount("abcde"); //, 0;
*/
duplicateCount("aabbcde"); //, 2;
/*
duplicateCount("aabBcde"); //, 2, "should ignore case";

duplicateCount("Indivisibility"); //, 1;
duplicateCount("Indivisibilities"); //,  2,  "characters may not be adjacent"
 */
