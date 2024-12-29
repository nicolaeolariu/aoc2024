const mapData = [
'.......#.........#..............#........................#......#....#............................#..#...............#............',
'...................#.............................................#...................................#............................',
'...............#.................................##.........#..........#.....##...#...#.....#....#..................#.............',
'#.............................................#..#.............#..........#.##.............................................#......',
'#.........................................................#.....#........................................##.......................',
'...........#.......#.#...........#....#.#...#......................................#...........................#...##............#',
'........................................................#..#.....................................#..#................#....#...#...',
'#.#.....#.........................#...........#.......................................#.......#.....................##............',
'.......#..........##.....#........#..................................................#.........................................#.#',
'#.#..............#.#.............................#............#....#...............#.........................#............#..#.#.#',
'..........................................................#....................................................#..................',
'.......................#....#...........#.....................#....#...#.......#..............#.......................#...........',
'..............................#..............#.......#....................................#.....................#...#...#.........',
'........#.................#...#....##..............#...........................#............................#.................#...',
'..................#........................................#......#......................................................#........',
'.............#.................#...#..............................................................................#...#...........',
'.....................................#..........................................................#.#.#......#.........#............',
'..........#...................................................................#.........##.......#..#.............................',
'...#.#....................................#..#...........#.......................................................##...............',
'........................................................................................................#.........................',
'.........#...........#......#..............#........#....................#...#......#.............................................',
'........#....#...............#....................#..........#.....................................#......#......#........#.#.....',
'........................#..........................#.......#........................#................#......#.....................',
'......................................#.........................................#............................#....................',
'...................................#.#...#...........#.........................................#.....................#............',
'.................#....#.....................................................................#..................#.........#........',
'...........#...........................................................#.............................#...............#..#.........',
'..#.....................#.........................................................................................................',
'....................#....#.#...........................#...........................................#..............#...............',
'...#...................................................#.............................................#.........#..........#.......',
'.............................###.....#..#..#......................................................................................',
'##................#.#.......#..............#.....#...............#..#............#................................................',
'......#...............................................#.#..#............................#............#.................#..........',
'........................................#.#...................................................#.....#.............................',
'#.......#.#.......................#.....#....................................#...................#................................',
'...##................................................................................................#.....................#......',
'............#.............#..................#.................#..................................................................',
'...#..............#..............................................................................#..........#......#..............',
'...#..#...#................................................#.....................#......#......................#.......#..........',
'.................#..#........#...............#.#................#......##.................#.................................#.....',
'#.....#.......#...........................................#..........#..............................#...#.#..#......#.....#.......',
'....................................#.........#........#..................#.............................................#.........',
'#...............................#........................#.................................................#.....#................',
'..#..................................#.......#.....................#..............................................................',
'........#...#.....................................#......#..............#..#..#..........................#.#....#.................',
'.............#..........#....#................#.......#..........................................#.....#..........................',
'.............................................#................................#.........................#...#.....................',
'.........#........#...................................................................#.......#....#..............................',
'....................................#.......................#..............#...............................#......................',
'....#....................#................................#....#...........#.............#........................................',
'....#...........#...................#.#..................................................#.....................#..................',
'..........#....................#............#.##...#.......#....#...............#.....#...#.........................#.............',
'.......#....................................................................................................#.................#...',
'...............................................................................#......#.................#...#.....................',
'..................#........#..........#..........................................................................#................',
'..........................................................................................#.......................................',
'.#..#...........#.................................##...........................#.....#...................#..#.....................',
'........................#..#..........................................................#............#..................#..........#',
'...........#...................................................##...........................#...............................#.....',
'........#......................................................................................................#..................',
'........#..#............................#..#...........#..............................#......................#.##...........#....#',
'........#...#.#..............#...#.....................#....................#.#..............................#....................',
'.......................................................#....................................................#..#..................',
'...........................................#......................#................#........................#....................#',
'.............#...............#................................................................................#...................',
'..#...#............#.............#.....#........................#............#....................#...............................',
'.....#...................................................................................................................#........',
'....................#..#...........#....#.............................................................................#.......#...',
'..............#......#.........................#...........#...#...........................................#...#..................',
'..............................#.....#.........................................................#......#.#......#...................',
'............................................................#...................#.#............................#..................',
'.............###.#........................................#........................................................#..............',
'......#................................#...............##.........................................................................',
'.........#.....#.#.....................#.......................................#...............#..........#....#....#.............',
'..............................................#....................................#...........................................#..',
'............#.#..........#........#..#.....#.............#..........#............#......#...................##..........#.........',
'............#....#...................................#.............................#.........................#....................',
'.#..................................#....#.........................................................................#..............',
'.........................#...#...#.................#..................#.............#.#...#...............#.......................',
'.........#...............................#...........#.............................#...........................#..........#.......',
'......#..........................#.............#..........#.......................................................................',
'.......#...............#.........#.............#...............................#..................................................',
'..#......#....................##...........................................#........................................#.............',
'..........................#.....#.......................#...........................................................#.#...........',
'..#....................#.............#................................................................#.#.........................',
'.........#....................#.....#....#...............#.......................#........#.......................................',
'..............#...................................................................#................#...#..........................',
'....................#.....#.......#..#......................................#...........#..................................##....#',
'.......#.......................................................................#..................................................',
'......#.............##..........................#..#......................^.......................................................',
'..............................#..........#...................#.................................#.....................#............',
'.......................##..........................#.......#..............................#...................................#.#.',
'................#....................................................................#...............................#.........#..',
'..........................................#......#.....................................#................#........#................',
'#......................................#.......................................................#..#...........#...................',
'.......#.............#..................#..#...#............#.......#.....#.....#.#...............................................',
'.............................#........#.............#.....#.......#...................................#.#..................#......',
'.................#......................................................................................#........#..#.............',
'........................................................................#..............#.....#..............................#.....',
'....#....#..........................................#......##...#....................#...................#..........#.............',
'.................##.......................##.#.........#................................................#.........................',
'.#..............................................#.........................#.#.#..........#.....................................##.',
'............................................................#..........#....#...................................................#.',
'....#...........#.............................#.....................#.........#..................#...........................#....',
'......#.#.......#..#......#........#..#...................#....#..................................................................',
'............#........................................................................................................#............',
'.....................................................#..........................................#................#................',
'...#.......#..#..............#.............................#....................................#.................................',
'.................##.........#........................#....................................#...............#.#.#...................',
'................#......#......................#..#..........................................#.....................................',
'......#..................................................##.#.#........#...........................#.......................#......',
'........................#............#......#.........#.............#.............................................#.....#.##......',
'......................#........................................#.......#.........#.................#..#...........#...............',
'..#.......#.........##..#.#................................................................................#.........#............',
'........................................................................................#............#...........#................',
'................#...#....................#..##..#...............#.............................................................#...',
'...#........#..........................#.....#..........................#....................................#.........#.......##.',
'.................#...........................#.........#......#............................#.....................#................',
'...................#..........#....#.......#...................#.............................#..........#.........................',
'.......#..............#.................................#.........#....................................#.................#....##.#',
'..................................#.......................#....#..#.........................#....................#................',
'.....#.........#............#...#.........#........#...................#...#......................#.....#............#............',
'#.#....#...#........#................................##..........................#.............................##...#....#........',
'.............##..........##...#......#.......#.#................#.#.......................#.............#.........................',
'.............#....................................#....................................#..........................................',
'..................................#..............................#.......................................#................#.......',
'...................#...............#..............................................................................................',
'....#........#.................................#........#.....................................#.......#................#........#.',
'.................#......#.......................................................##.....#..................#.......................',
'...............#.......................#.#........#...........................................#........#..........................',
]

// const mapData = [
//   "....#.....",
//   ".........#",
//   "..........",
//   "..#.......",
//   ".......#..",
//   "..........",
//   ".#..^.....",
//   "........#.",
//   "#.........",
//   "......#...",
// ]

const quardDirection = ['^', 'v', '>', '<'];
const directions = {
  '^': [-1, 0],
  '>': [0, 1],
  'v': [1, 0],
  '<': [0, -1],
}

let direction = null;
const map = mapData.map(row => row.split(''));

console.log(map);

// find guard
const findGuardPosition = () => {
  let position = [0, 0];
  map.forEach((line, x) => {
    line.forEach((val, y) => {
      if(quardDirection.indexOf(val) !== -1) {
        // Found guard
        position = [x, y];
        direction = val;
      }
    });
  })
  return position;
}

const testPosition = (x, y, dir) => {
  let guard = [x, y]
  let newX = x;
  let newY = y;
  let newDirection = dir;
  let newHeading = directions[newDirection];
  let isGood = true;
  let val;
  const hitPoints = {};
  let processed = {};
  let loop = false;

  do {
    newX = guard[0] + newHeading[0];
    newY = guard[1] + newHeading[1];
    val = map?.[newX]?.[newY];

    if(hitPoints[newX + '_' + newY + '_' + newDirection]) {
      loop = true;
    }else{
      if(val === '#') {
        newDirection = changeDirection(newDirection);
        newHeading = directions[newDirection];
      } else {
        hitPoints[newX + '_' + newY + '_' + newDirection] = 1;
        processed[newX + '_' + newY] = newDirection;
        guard = [newX, newY];
      }
    }
  }while(val && !loop);

  if(!val) {
    isGood = false; // no loop
  }

 if(isGood) {
    map.forEach((line, xx) => {
      let str = '';
      line.forEach((v, yy) => {
        if(processed[xx + '_' + yy]) {
          str += processed[xx + '_' + yy]
        }else if(x === xx && y === yy){
          str += 'O';
        }else{
          str += v
        }
      })
      console.log(str);
    })
    console.log('                   ');
 }
  return isGood;
}

const changeDirection = (val) => {
  const keys = Object.keys(directions);
  let currentKey = keys.indexOf(val);
  currentKey++;
  if(currentKey >= keys.length) {
    currentKey = 0;
  }
  return keys[currentKey];
}

let positions = 1;
let obstaclesCount = 0;
let obstacles = [];
// const visitedPositions = [];

const move = (position) => {
  let processed = false;
  let guard = position;
  // visitedPositions.push(guard[0] + '-' + guard[1]);
  let heading = directions[direction];
  let nextPosition, x, y;
  do {
    x = guard[0] + heading[0];
    y = guard[1] + heading[1];
    nextPosition = map?.[x]?.[y];

    // Something blocked
    if(nextPosition === '#') {
      direction = changeDirection(direction);
      heading = directions[direction];
    } else {
      if(nextPosition) {
        map[x][y] = '#';
        if(testPosition(guardPosition[0], guardPosition[1], '^')) {
          console.log('Position of Object',  x, y);
          // found good Obstacle
          if(!(guardPosition[0] === x && guardPosition[1] === y) && obstacles.indexOf(x + '-' + y) === -1) {
            obstaclesCount++
            obstacles.push(x + '-' + y);
          }
        }
        map[x][y] = '.';
        guard = [x, y];
      }
    }
  } while(nextPosition !== undefined)
}


console.time('run:')
const guardPosition = findGuardPosition();
console.log('guardPosition', guardPosition, );
move(guardPosition);
console.log('Obstacles', obstacles, obstaclesCount);
console.timeEnd('run:')
//