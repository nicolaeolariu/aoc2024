console.time('run:')

const check = (number) => {
  if(number === 0 ) {
    return [ 1 ];
  }
  const str = number.toString();
  const length = str.length;
  if(length % 2 === 0) {
    return [parseInt(str.substr(0, length / 2 )), parseInt(str.substr(length / 2, length - 1))];
  }
  return [number * 2024];
}

// // PART 2
const  inputData = [890, 0, 1, 935698, 68001, 3441397, 7221, 27]
// const  inputData = [125, 17]

let nrBlinks = 25; // part 1
nrBlinks = 75;


const step  = 25;
const precalculated = {};
const counts = {};

let totalSum = 0;

const loopLocal = (val, i) => {
  if(i <= 0) {
    return [val];
  }
  let items = [];
  const response = check(val);
  --i;
  response.forEach(v => {
    // console.log('localI', localI, v);
    items = [...items, ...loopLocal(v, i)];
  })

  return items;
}

let print = 0;
let print1 = 0;


const loop = (val, i) => {
  let sum = 0;
  // console.log('loop', i, val)
  let localI = i;
  if(i <= 0) {
    return 1;
  }
  localI--;

  if(i < step) {
    print++;
    if(print === 10000000) {
      console.log('calculating...')
      print = 0;
    }
    const response = check(val);
    response.forEach(v => {
      // console.log('localI', localI, v);
      sum += loop(v, localI)
    })
  } else {
    if(!precalculated[val] ) {
      // precalculate 10 iterations
      precalculated[val] = loopLocal(val, step);
      let countsLocal = {}
      precalculated[val].forEach(a => {
        countsLocal[a] = countsLocal[a] || 0;
        countsLocal[a]++;
      })
      precalculated[val].sort();
      precalculated[val] = precalculated[val].filter(onlyUnique);
      counts[val] = countsLocal;

      // console.log('precalculated: ', val);
    }else{
      print1++;
      if(print1 === 1000000) {
        // console.log('reusing............')
        print1 = 0;
      }
    }

    precalculated[val].forEach(a => {
      if(counts[val][a]) {
        sum += counts[val][a] * loop(a, i - step );
      }else{
        sum += loop(a, i - step )
      }
    });
  }

  return sum;
}

const data = {};

const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
}

let total = 0;

inputData.forEach((item) => {
  data[item] = 1;
  total += loop(item, nrBlinks);
  console.log('avem total', item, total)
});
console.log(counts)
console.log('total: ', total)
console.timeEnd('run:')

