"use strict";
function combine(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        var result = Number(input1) + Number(input2);
    }
    else {
        var result = input1.toString() + String(input2);
    }
    return result;
}
let resNum = combine(1, 1);
console.log(resNum);
let resStr = combine('1', 1);
console.log(resStr);
const e1 = {
    name: 'Max',
    names: 12,
    priviliges: ['create-server'],
    startDate: new Date()
};
