// let input = [
// '89010123',
// '78121874',
// '87430965',
// '96549874',
// '45678903',
// '32019012',
// '01329801',
// '10456732',
// ];

const  input = [
  '14567892107654348943218769016567650154541210421036',
  '03456783298993267654309458122168743243450344323145',
  '12567654456780154327812367433059804012769455410234',
  '03498012349876065016901056544965418765898766708943',
  '12345101212145076545411034545878329658981055899854',
  '09876876705034187632110123656789421047432765988765',
  '67878965896123298901001656743078431236598894012034',
  '50965014387654567650012349856127340012367653213125',
  '41234321298347656543243492347833458903458743404987',
  '30087430178298343650156781016942167812769252985676',
  '21196567069121243761056432679851043212890101679854',
  '33203498451080252852347841589765654301285234521763',
  '14512432347890161943210950432106567610106501430012',
  '01693501036543270856102167645656788943217432567897',
  '32789672321015389987343078938765497654998549879898',
  '45679987410234578101256560129812321067801456734787',
  '03478756500187665432107452121901054328982340125676',
  '12568767891098987013898943030810167017654321010210',
  '21079458910127698123965436945107878988901267124378',
  '30980349821034787654876327876716901210985458095469',
  '45671210136765693454761016329825432345671329186954',
  '12789800345876548763876125419434501654510413277843',
  '03543211238989439012985630308765898746701204567832',
  '14623400141232323101234521678906567239874343236901',
  '25710519850541014143219834567611452108965650145690',
  '76897678769650001054301712106320143210345789036781',
  '87678989678742112363212601235431234321276988325432',
  '90549876349233678478004592347842389123489676710876',
  '21632305256104569589123487656965476016512369856945',
  '52301014107012345670149874565456365017603450747832',
  '65490123458912396501234563432147454328214921632401',
  '86985432167905487654341012563038901039309834521321',
  '97876789001856778761232127678127612398712701100410',
  '89810678012760869890103238999210543125625632234509',
  '76701549013451987217876434785695610034534548765678',
  '05432432174012987301987325654780123435210159854789',
  '12980120985123673458986510783279234987346543123898',
  '43878921976034562567603412892168765679857012010187',
  '34565437852178901070412103601001410012768001921236',
  '45430566543065012181543014580432321003459122876545',
  '50121098767654327892678877698569457654219433468904',
  '23292145678954218983019988087658768894308596567812',
  '14587239010563007654128679112565489765107687656521',
  '05674678323472167659436543203474321087230156785430',
  '96983565401089898748540987654589321098543243896543',
  '87874328992396701037621296562105465407698012565432',
  '78765017687478632128760345673456978312789801478521',
  '29653078596569543019656921087567889213456700329650',
  '12532169430430156010567892193610367804765410418789',
  '03445678321321060123456543012323458912894321001678',
]

console.time('run:')

const map = input.map(line => line.split('').map(a => parseInt(a)));

function findtrailHeads(arr) {
  let trailHead = [];
  arr.forEach((line, y) => {
    line.forEach((nr, x) => {
      if(nr === 0) {
        trailHead.push([parseInt(x), parseInt(y)]);
      }
    })
  })
  return trailHead;
}


const directions = {
  '^': [-1, 0],
  '>': [0, 1],
  'v': [1, 0],
  '<': [0, -1],
}

const trailHeads = findtrailHeads(map)

const gettNext = (point, direction) => {
    return [point[0] + direction[0], point[1] + direction[1]];
}

const testPoint = (val, nextVal) => {
  if(nextVal - val === 1) {
    return true;
  }
  return false;
}
let hikingTrails = {};

const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
}

const move = (position) => {
  const trails = {};
  let currentVal = 0;
  let found = [];
  for (let key in directions) {
    let nextPoint = gettNext(position, directions[key]);
    currentVal = map?.[position[1]]?.[position[0]];
    const nextVal = map?.[nextPoint[1]]?.[nextPoint[0]];
    valid = testPoint(currentVal, nextVal);

    if(valid) {
      if(nextVal === 9) {
        found.push(nextPoint);
      }else{
        trails[nextPoint[0]+','+nextPoint[1]] = move(nextPoint); // move
      }
    }
  }

  if(found.length) {
    return found;
  }
  return trails;
}

let points = [];
const getFinalPoint = (trails) => {
  console.log('trails:', trails)
  for(let point in trails) {
    console.log(point, ':', trails[point])
    if(!Array.isArray(trails[point])) {
      getFinalPoint(trails[point]);
    }else{
      trails[point].map(trail => {
        points.push(trail[0] + ',' + trail[1]);
      })
    }
  }
}
const calculateScore = (head) => {
  points = [];
  let score = 0;
  let position = head;
  let valid = false;
  const trails = move(position)
  getFinalPoint(trails)
  let p = points;
  console.log('for Head:', head, trails, p);
  return p.length;
}

console.log(map);
console.log(trailHeads);

let sum = [];
trailHeads.forEach(head => {
  sum[[head[0] + ',' + head[1]]] = calculateScore(head);
});


console.log('scores obj', sum);
let total = 0;
Object.values(sum).map(val => {
  total+=val;
});

console.log('total score: ', total);


console.timeEnd('run:')