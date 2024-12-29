console.time('run:')

let inputData = `
123
`;

let buyers = inputData.split("\n").map(a => parseInt(a));

const xOR = (a, b) => {
  return a ^ b;
}

const mix = (secret, number) => {
  return xOR(secret, number);
}

const prune = (number) => {
  return number % 16777216;
}

const makeSecret = (value) => {
  let newValue = mix(value, value * 64);
  console.log('makeSecret', value * 64, value, newValue);
  newValue = prune(newValue);
  console.log('prune: ', newValue);
  newValue = mix(newValue, Math.floor(newValue/32));
  console.log('makeSecret2', newValue);
  newValue = prune(newValue);
  console.log('prune: ', newValue);
  newValue = mix(newValue, newValue * 2048);
  console.log('makeSecret3', newValue);
  newValue = prune(newValue);
  console.log('prune: ', newValue);
  return newValue;
}

buyers = [1, 10, 100, 2024];

console.log('test mix 42, 15 = 37', mix(42, 15))
console.log('test prune 100000000 = 16113920', prune(100000000))


const resultAfter = buyers.map((value, k) => {
  let secret = value;
  for(let i = 0; i < 10; i++) {
    secret = makeSecret(secret);
    console.log('step',i, secret);
  }
  return secret;
});

console.log(resultAfter);

console.timeEnd('run:');
