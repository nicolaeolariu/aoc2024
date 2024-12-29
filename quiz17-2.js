console.time('run:')

let inputData = `
Register A: 90938893795561
Register B: 0
Register C: 0
`;

// let programInput = 'Program: 0,3,5,4,3,0';
let programInput = 'Program: 2,4,1,6,7,5,4,6,1,4,5,5,0,3,3,0';
const program = programInput.split('Program: ')[1].split(',');

let register = {};
const input = inputData.split("\n").filter(a => a).forEach(row => {
  const inst = row.split(": ");
  const [b, r] = inst[0].split(' ');
  register[r] = parseInt(inst[1]);
});

// console.log({register});
// console.log({program});

let instructionPointer = 0;


const dec2bin = (dec) => {
  return Number(dec).toString(2);
}
const bin2dec = (bin) => {
  return parseInt(bin, 2);
}
const xOR = (a, b) => {
  return a ^ b;
}

let output = [];

const comboOperand = (operand) => {
  switch(operand){
  case "0":
    return 0;
  case "1":
    return 1;
  case "2":
    return 2;
  case "3":
    return 3;
  case "4":
    return register['A'];
  case "5":
    return register['B'];
  case "6":
    return register['C'];
  case "7":
    console.log('7: this should never show')
    return;
  }
}
const literalOperand = (operand) => {
  return parseInt(operand);
}

const instructions = [
  //"adv" 0
  (operand) => {
    // console.log(register['A'], operand, comboOperand(operand), (2 ** comboOperand(operand)), )
    register['A'] = parseInt(register['A'] / (2 ** comboOperand(operand)));
    // console.log("adv 0: ", register['A'])
  },
  // bxl 1
  (operand) => {
    register["B"] = xOR(register["B"], literalOperand(operand));
    // console.log('bxl(xOR):', register["B"]);
    return register["B"];
  },
  // bst 2
  (operand) => {
    register['B'] = comboOperand(operand) % 8;
    // console.log("bst 2: ", register['B'])
  },
  // jnz 3
  (operand) => {
    // console.log('jump', register['A'])
    if(register['A'] !== 0) {
      instructionPointer = literalOperand(operand);
    }
    // console.log({instructionPointer})
  },
  // bxc 4
  (operand) => {
    // does nothing with operand
    register['B'] = xOR(register['B'], register['C'])
    // console.log("bxc 4: ", register['B'])
    return register['B'];
  },
  // out 5
  (operand) => {
    output.push(comboOperand(operand) % 8);
    // console.log('print:', operand, comboOperand(operand),comboOperand(operand), comboOperand(operand) % 8 , output.join(','))
    return comboOperand(operand) % 8;
  },
  // bdv 6
  (operand) => {
    register['B'] = parseInt(register['A'] / (2 ** comboOperand(operand)));
    // console.log("bdv 6: ", register['B'])
  },
  // cdv 7
  (operand) => {
    register['C'] = parseInt(register['A'] / (2 ** comboOperand(operand)));
    // console.log("cdv 7: ", register['C'])
  },
]

// do {
//   const instruction = program[instructionPointer];
//   const operand = program[instructionPointer+1];
//   // run instruction
//   instructions[instruction](operand);

//   if(!(instruction == '3' && register["A"] !== 0)) {
//     instructionPointer = instructionPointer+2;
//   }
//   // console.log({instruction, operand, register, instructionPointer});

// }while(instructionPointer+1 < program.length);

// let str = "";
// output.forEach(val => {
//   str += val;
// });
// console.log('final result: ', str)
// console.log('final print: ', output.join(','))

let bestA = 0;
const loop = (a, count) => {
  if(count >  program.length) {
    console.log({bestA: a})
    bestA = a;
    return a;
  }

  for (let i = 0; i <= 7; i++) {
    // Initialize
    const localA = Number(a << 3 | i);
    console.log('test', localA, a, i)
    register["A"] = localA;
    register["B"] = 0
    register["C"] = 0;

    instructionPointer = 0; //
    let localProgram  = program.slice(0, -2);

    output = [];
    do {
      const instruction = localProgram[instructionPointer];
      const operand = localProgram[instructionPointer+1];

      // run instruction
      instructions[instruction](operand);
      instructionPointer = instructionPointer+2;
    }while(instructionPointer + 1 < localProgram.length);

    if(output[0] === parseInt(program[program.length - count])) {
      console.log('loop', localA, output[0], count)
      loop(localA, count+1);
    }
  }
}

//
loop(0, 1);

console.timeEnd('run:');
