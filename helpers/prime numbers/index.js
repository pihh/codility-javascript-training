function divisors(n){
  let i = 1;
  let count = 0;
  let divisors = [];
  while(i*i <n){
    if (n % i == 0) {
      count +=2;
      divisors.push(i);
    }
    i++;
  }

  return {
    count: count,
    divisors: divisors
  }
}

function primality(n){
  let i = 2;
  while(i*i <= n){
    if(n % i === 0){
      return false;
    }
  }
  return true;
}
