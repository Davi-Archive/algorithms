function solution(number) {
  let soma = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      soma += i;
    }
  }
  console.log(soma);
  return soma;
}

solution(10);
