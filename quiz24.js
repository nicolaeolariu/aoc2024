console.time('run:')

let inputData = `
x00: 1
x01: 0
x02: 0
x03: 1
x04: 1
x05: 1
x06: 0
x07: 0
x08: 0
x09: 1
x10: 0
x11: 0
x12: 0
x13: 1
x14: 0
x15: 0
x16: 1
x17: 0
x18: 0
x19: 0
x20: 0
x21: 0
x22: 1
x23: 1
x24: 0
x25: 1
x26: 0
x27: 1
x28: 1
x29: 1
x30: 1
x31: 1
x32: 0
x33: 1
x34: 1
x35: 0
x36: 1
x37: 1
x38: 1
x39: 0
x40: 1
x41: 0
x42: 0
x43: 1
x44: 1
y00: 1
y01: 1
y02: 1
y03: 1
y04: 0
y05: 1
y06: 0
y07: 1
y08: 0
y09: 1
y10: 1
y11: 1
y12: 1
y13: 0
y14: 0
y15: 1
y16: 1
y17: 1
y18: 1
y19: 1
y20: 1
y21: 0
y22: 0
y23: 0
y24: 1
y25: 1
y26: 1
y27: 0
y28: 1
y29: 1
y30: 1
y31: 0
y32: 0
y33: 1
y34: 0
y35: 1
y36: 0
y37: 0
y38: 1
y39: 1
y40: 1
y41: 0
y42: 1
y43: 1
y44: 1
`;
let programInput = `
dff AND ntb -> wsq
y28 AND x28 -> sfd
ttg AND brk -> bww
mgn AND vgd -> jvs
swj XOR rjv -> hwk
rpt XOR rmb -> z30
hvt XOR qvb -> z15
qjh OR ddk -> rpt
grj AND jqn -> rqr
x28 XOR y28 -> nbg
y24 AND x24 -> spw
y03 AND x03 -> mcf
pjn OR smj -> jbd
y07 AND x07 -> ddw
skk XOR qfr -> z29
y38 XOR x38 -> fsp
y25 XOR x25 -> qmd
y41 AND x41 -> tfc
y37 AND x37 -> vbq
y27 XOR x27 -> rps
trr OR fsd -> vgd
sgn XOR hrp -> z03
rtq OR kcn -> dtq
x16 AND y16 -> fqs
x05 AND y05 -> tcn
spm XOR qnw -> z44
wjs OR sdr -> hbk
x21 AND y21 -> hvb
mcf OR bvk -> cjv
pfp XOR srt -> z23
dpj XOR nbg -> z28
tcn OR jsd -> swj
rgn OR mfp -> z45
wqv OR mkv -> dpj
y35 AND x35 -> fsd
thj XOR qnb -> z18
dmg OR dwj -> wpg
x04 AND y04 -> grm
y32 XOR x32 -> qrw
hpc XOR qrw -> z32
fpp AND wdv -> cpp
tvv XOR hbk -> z43
x01 XOR y01 -> dgj
pvw XOR gsp -> z14
x15 AND y15 -> stw
wpg XOR mhr -> z24
dsr OR hsd -> gmw
src XOR qmh -> z33
cdh AND wfs -> ckm
hwc OR rrk -> cdh
ptf OR stw -> vfj
src AND qmh -> fmn
y31 XOR x31 -> vkh
srn AND vfj -> crf
sgh XOR wmb -> z40
nhk AND gmw -> cjn
fpp XOR wdv -> z13
x39 XOR y39 -> dcs
x22 AND y22 -> jmg
y29 AND x29 -> ddk
fsm AND rtg -> ctk
x41 XOR y41 -> mkb
x19 XOR y19 -> nhk
ggk OR qwq -> tgb
y42 AND x42 -> wjs
y10 XOR x10 -> dff
y05 XOR x05 -> sss
brr AND nff -> hwc
kpb XOR ktw -> z35
x40 AND y40 -> fvs
dtq AND vkh -> mjr
tfc OR rpg -> sgp
vfj XOR srn -> z16
x15 XOR y15 -> hvt
nnc OR rnb -> src
btt OR jqj -> qvb
hdp AND dcs -> ddp
y26 XOR x26 -> mbh
y11 XOR x11 -> brr
wnc OR fmn -> rtg
y14 XOR x14 -> pvw
ftw AND jbd -> wfb
y27 AND x27 -> mkv
vvj OR gjk -> sgn
y09 AND x09 -> gwn
ftw XOR jbd -> z21
y06 XOR x06 -> rjv
y35 XOR x35 -> ktw
mbh AND khj -> krr
x36 AND y36 -> ksr
x08 AND y08 -> vmg
wfs XOR cdh -> z12
tnt AND nbs -> vhp
dqw XOR sgp -> z42
sqw AND bsc -> fns
mqg OR ddp -> wmb
swj AND rjv -> spj
brk XOR ttg -> z17
dff XOR ntb -> z10
y42 XOR x42 -> dqw
y02 AND x02 -> gjk
gqc XOR vqv -> cgr
npm OR wsq -> nff
hdp XOR dcs -> z39
y13 AND x13 -> dnj
x08 XOR y08 -> sqw
ksr OR jvs -> gqc
x43 AND y43 -> vhq
y12 XOR x12 -> wfs
gmw XOR nhk -> z19
khj XOR mbh -> z26
x16 XOR y16 -> srn
cjv AND qws -> fgb
wdh OR ckb -> hdp
y09 XOR x09 -> npw
mkb AND wwj -> rpg
y17 AND x17 -> crc
y13 XOR x13 -> fpp
ctk OR vbw -> kpb
x00 AND y00 -> nvd
y04 XOR x04 -> qws
x44 AND y44 -> mfp
nvd XOR dgj -> z01
y22 XOR x22 -> pcw
dbm XOR rps -> z27
ntg OR sfd -> qfr
ddg OR fvs -> wwj
crm XOR sss -> z05
y40 XOR x40 -> sgh
ktw AND kpb -> trr
bsc XOR sqw -> z08
wpg AND mhr -> ptr
x01 AND y01 -> ggk
cpp OR dnj -> gsp
vbb OR vhq -> qnw
y20 XOR x20 -> kbm
sgp AND dqw -> sdr
x30 XOR y30 -> rmb
mgn XOR vgd -> z36
wrk OR krr -> dbm
x18 AND y18 -> dsr
srt AND pfp -> dmg
rps AND dbm -> wqv
qnw AND spm -> rgn
npw AND djg -> scf
sgh AND wmb -> ddg
y19 AND x19 -> twp
nbg AND dpj -> ntg
kbm XOR hqk -> z20
gqc AND vqv -> z37
ptr OR spw -> nbs
x37 XOR y37 -> vqv
qvb AND hvt -> ptf
x18 XOR y18 -> thj
x43 XOR y43 -> tvv
scf OR gwn -> ntb
y21 XOR x21 -> ftw
y23 AND x23 -> dwj
x33 XOR y33 -> qmh
rtg XOR fsm -> z34
crc OR bww -> qnb
jqn XOR grj -> z07
x44 XOR y44 -> spm
djg XOR npw -> z09
rqr OR ddw -> bsc
wfb OR hvb -> vwf
hqk AND kbm -> smj
fsp AND hbm -> wdh
x26 AND y26 -> wrk
y06 AND x06 -> z06
hrp AND sgn -> bvk
tvv AND hbk -> vbb
y25 AND x25 -> tnt
rbw XOR tgb -> z02
x33 AND y33 -> wnc
y24 XOR x24 -> mhr
vmg OR fns -> djg
rmb AND rpt -> kcn
y23 XOR x23 -> srt
fsp XOR hbm -> z38
nff XOR brr -> z11
jkc OR jmg -> pfp
crm AND sss -> jsd
x11 AND y11 -> rrk
y32 AND x32 -> nnc
qmd OR vhp -> khj
x10 AND y10 -> npm
fgb OR grm -> crm
vwf XOR pcw -> z22
nbs XOR tnt -> z25
x07 XOR y07 -> jqn
pcw AND vwf -> jkc
x34 XOR y34 -> fsm
pvw AND gsp -> jqj
skk AND qfr -> qjh
dhf OR ckm -> wdv
y31 AND x31 -> hgw
x14 AND y14 -> btt
y30 AND x30 -> rtq
dgj AND nvd -> qwq
mjr OR hgw -> z31
fqs OR crf -> ttg
x00 XOR y00 -> z00
y20 AND x20 -> pjn
x29 XOR y29 -> skk
vkh XOR dtq -> hpc
rbw AND tgb -> vvj
thj AND qnb -> hsd
cjn OR twp -> hqk
y02 XOR x02 -> rbw
y38 AND x38 -> ckb
y12 AND x12 -> dhf
x17 XOR y17 -> brk
y34 AND x34 -> vbw
vbq OR cgr -> hbm
qrw AND hpc -> rnb
y39 AND x39 -> mqg
cjv XOR qws -> z04
y36 XOR x36 -> mgn
x03 XOR y03 -> hrp
wwj XOR mkb -> z41
spj OR hwk -> grj
`;
// inputData = `
// x00: 1
// x01: 0
// x02: 1
// x03: 1
// x04: 0
// y00: 1
// y01: 1
// y02: 1
// y03: 1
// y04: 1
// `;

// programInput = `
// ntg XOR fgs -> mjb
// y02 OR x01 -> tnw
// kwq OR kpj -> z05
// x00 OR x03 -> fst
// tgd XOR rvg -> z01
// vdt OR tnw -> bfw
// bfw AND frj -> z10
// ffh OR nrd -> bqk
// y00 AND y03 -> djm
// y03 OR y00 -> psh
// bqk OR frj -> z08
// tnw OR fst -> frj
// gnj AND tgd -> z11
// bfw XOR mjb -> z00
// x03 OR x00 -> vdt
// gnj AND wpb -> z02
// x04 AND y00 -> kjc
// djm OR pbm -> qhw
// nrd AND vdt -> hwm
// kjc AND fst -> rvg
// y04 OR y02 -> fgs
// y01 AND x02 -> pbm
// ntg OR kjc -> kwq
// psh XOR fgs -> tgd
// qhw XOR tgd -> z09
// pbm OR djm -> kpj
// x03 XOR y03 -> ffh
// x00 XOR y04 -> ntg
// bfw OR bqk -> z06
// nrd XOR fgs -> wpb
// frj XOR qhw -> z04
// bqk OR frj -> z07
// y03 OR x01 -> nrd
// hwm AND bqk -> z03
// tgd XOR rvg -> z12
// tnw OR pbm -> gnj
// `;

const inputs = {}
inputData.split("\n").filter(a => a).forEach(row => {
  const [key, val] = row.split(": ");
  inputs[key] = parseInt(val);
});

const gates = programInput.split("\n").filter(a => a).map(row => {
  const [opp, result] = row.split(" -> ");
  const [wire1, op, wire2] = opp.split(" ");

  return { wire1, op, wire2, result}
});

console.log({gates});
console.log({inputs});

const dec2bin = (dec) => {
  return Number(dec).toString(2);
}
const bin2dec = (bin) => {
  return parseInt(bin, 2);
}

const operations = {
  XOR: (a, b) => {
    return a ^ b;
  },
  AND: (a, b) => {
    return a && b;
  },
  OR: (a, b) => {
    return a || b;
  },
}

const output = {};

let noValGates = {};

const openGate = (gate) => {
  const { wire1, op, wire2, result} = gate;

  if(typeof inputs[wire1] !== 'undefined' && typeof inputs[wire2]  !== 'undefined') {
    const openGateOpResult = operations[op](inputs[wire1], inputs[wire2]);
    if(result[0] === 'z') {
      console.log('STEP 4.1', result)
      output[result] = openGateOpResult;
    }else{
      console.log('STEP 4.2', result)
      inputs[result] = openGateOpResult;
    }

    console.log('STEP 5.1', result)
    open(result);
    return true;
  }else{
    console.log('STEP 4.0 - nada', gate)
  }
  return false;
}
const open = (gate) => {
  if(noValGates?.[gate]) {
    let toDelete = [];
    noValGates[gate].forEach((newGate, k) => {
      console.log('STEP 3.1', gate, ' = ', newGate)
      if(openGate(newGate)){
        toDelete.push(k);
      }
    });
    toDelete.forEach(index => {
      delete noValGates[gate][index];
      noValGates[gate] = noValGates[gate].filter(a => a)
    })
  }
}

gates.forEach(gate => {
  const { wire1, op, wire2, result} = gate;
  console.log('STEP 1: ', op, wire1, inputs[wire1], wire2, inputs[wire2], result);
  let hasOutput = true;
  if(typeof inputs[wire1] === 'undefined') {
    noValGates[wire1] = noValGates[wire1] || [];
    noValGates[wire1].push(gate);// = noValGates[wire1] || {};
    // noValGates[wire1]["1"] = gate;
    hasOutput = false;
    console.log('STEP 1.1: ', wire1);
  }
  if(typeof inputs[wire2]  === 'undefined') {
    noValGates[wire2] = noValGates[wire2] || [];
    noValGates[wire2].push(gate);
    // noValGates[wire2] = noValGates[wire2] || {};
    // noValGates[wire2]["2"] = gate;
    hasOutput = false;
    console.log('STEP 1.2: ', wire2);
  }
  if(hasOutput) {
    const operationResult = operations[op](inputs[wire1], inputs[wire2]);
    if(result[0] === 'z') {
      console.log('STEP 2.1:' , result, operationResult)
      output[result] = operationResult;
    }else{
      console.log('STEP 2.2:', result);
      inputs[result] = operationResult;
      open(result);
    }
  }

  // console.log({ wire1, op, wire2, result}, inputs[result]);
})
console.log('inputs:', inputs)
console.log('noValGates:', noValGates)
let str = "";
const onlyZs = [];
const sortedKeys = Object.keys(output).filter(a => a[0] === 'z').sort().reverse();
console.log('onlyZs: ', sortedKeys)
sortedKeys.forEach(wire => {
  str+=output[wire];
})
console.log('output: ', output)
console.log('final bit: ', str)
console.log('final number: ', bin2dec(str))
console.timeEnd('run:');
