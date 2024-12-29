console.time('run:')

// let codes = [
// '029A',
// '980A',
// '179A',
// '456A',
// '379A',
// ];

let codes = [
'826A',
'341A',
'582A',
'983A',
'670A',
];

const keynumericPad = [
  ['7', '8', '9'],
  ['4', '5', '6'],
  ['1', '2', '3'],
  ['', '0', 'A'],
]

const keyNumericDirectional = [
  ['', '^', 'A'],
  ['<', 'v', '>'],
]


// const size = 2;
const size = 2;
const sizes = {};

const pointers = [[3, 2], ...(new Array(size).fill([0, 2]))];
const reserved = [[3, 0], ...(new Array(size).fill([0, 0]))];

const move = (destinationValue, key) => {

  if(key > size) {
    return 0;
  }

  const moves = '';

  const source = key === 0 ? keynumericPad : keyNumericDirectional;
  let currentPoint = pointers[key];
  let backup = pointers[key];
  let destinationPoint = [];
  const reservedPoint = reserved[key];

  source.forEach((line, y) => {
    const x = line.indexOf(destinationValue);
    if(x !== -1) {
      destinationPoint = [y, x];
    }
  })

  const moveHorizontally = (nextKey) => {
    let pushed = 0;
    if(currentPoint[1] !== destinationPoint[1]) {
      const direction = currentPoint[1] < destinationPoint[1] ? '>' : '<';

      for(let i = 1; i <= Math.abs(currentPoint[1] - destinationPoint[1]); i++) {

        const possiblePosition = [currentPoint[0], (direction === '>' ? currentPoint[1] + i : currentPoint[1] - i)];
        if(possiblePosition[0] === reservedPoint[0] && possiblePosition[1] === reservedPoint[1]) {
          possiblePosition[0] = key ? 1 : 2;
          currentPoint = possiblePosition;
          const avoidSpace = key === 0 ? '^' : 'v';

          // console.log('move: ', nextKey, avoidSpace, pointers[key], possiblePosition, 'avoidSpace')
          if(size === key) {
            pushed++;
          }
          pushed += move(avoidSpace, nextKey);
        }

        // console.log('move: ', nextKey, direction, pointers[key], possiblePosition);
        pointers[key] = possiblePosition;
        // pushed += direction;
        if(size === key) {
          pushed++;
        }
        pushed += move(direction, nextKey);
      }
    }
    // console.log("-", key, pushed);
    return pushed;
  }

  const moveVertically = (nextKey) => {
    let pushed = 0;
    if(currentPoint[0] !== destinationPoint[0]) {
      const direction = currentPoint[0] < destinationPoint[0] ? 'v' : '^';

      for(let i = 1; i <= Math.abs(currentPoint[0] - destinationPoint[0]); i++) {
        const possiblePosition =  [(direction === 'v' ? currentPoint[0] + i : currentPoint[0] - i), currentPoint[1]];
        if(possiblePosition[1] === reservedPoint[1] && possiblePosition[0] === reservedPoint[0]) {
          currentPoint[1] = possiblePosition[1] = 1;

          const avoidSpace = key === 0 ? '^' : 'v';
          // console.log('move: ', nextKey, avoidSpace, pointers[key], possiblePosition, 'avoidSpace')

          if(size === key) {
            pushed++;
          }

          pushed += move(avoidSpace, nextKey);
        }

        pointers[key] = possiblePosition;

        if(size === key) {
          pushed++;
        }

        // console.log('move: ', nextKey, direction, pointers[key])
        pushed += move(direction, nextKey);
      }
    }
    // console.log("|", key, pushed);
    return pushed;
  }

  const moveHorizontallyFirst = (nextKey) => {
    // console.log('startHorizontal', {pointers, currentPoint, destinationPoint})
    let str = 0;
    str += moveHorizontally(nextKey);
    currentPoint = pointers[key];
    str += moveVertically(nextKey);
    currentPoint = pointers[key];

    if(size === key) {
      str++;
    }

    str += move('A', nextKey);

    return str;
  }

  const moveVerticallyFirst = (nextKey) => {
    let str = 0;
    str += moveVertically(nextKey);
    currentPoint = pointers[key];
    str += moveHorizontally(nextKey);
    currentPoint = pointers[key];

    if(size === key) {
      str++;
    }
    str += move('A', nextKey);

    return str;
  }

  const nextKey = key + 1;

  const currentPointKey = currentPoint.join(',');

  if(key && sizes?.[nextKey]?.[currentPointKey]?.[destinationPoint.join(',')]) {
    return sizes[nextKey][currentPointKey][destinationPoint.join(',')];
  }else{
    const firstSize = moveHorizontallyFirst(nextKey);
    pointers[key] = currentPoint = backup;

    const secondSize = moveVerticallyFirst(nextKey);
    if(!sizes?.[nextKey]?.[currentPointKey]) {
      if(!sizes[nextKey]) {
        sizes[nextKey] = {};
      }
      sizes[nextKey][currentPointKey] = {};
    }
    sizes[nextKey][currentPointKey][destinationPoint.join(',')] = {firstSize, secondSize};

    return firstSize > secondSize ? secondSize : firstSize;
  }
}

let total = 0;
codes.forEach(code => {
  const letters = code.split('');
  let pathern = 0;
  letters.forEach(letter => {
    pathern +=move(letter, 0);
  });

  console.log({code, pathern})
  // console.log(pathern.length, parseInt(code))
  total += pathern * parseInt(code);

  // console.log(pointers);
})
console.log({total});

console.log(sizes);

console.timeEnd('run:');
