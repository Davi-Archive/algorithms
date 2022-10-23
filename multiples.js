function solution(number) {
  let soma = 0;
  for (let i = 1; i < number; i++) {
    if (number < 0) {
      soma = 0;
    } else {
      if (i % 3 == 0 && i % 5 == 0) {
        soma += i;
      } else {
        if (i % 3 == 0) {
          soma += i;
        }
        if (i % 5 == 0) {
          soma += i;
        }
      }
    }
  }
  return soma;
}

solution(10);
