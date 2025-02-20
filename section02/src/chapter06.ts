// any
// 특정 변수의 타입을 정확히 모를 때

let anyVar: any = 10;

// anyVar = "string";
// anyVar = true;
// anyVar = {};
// anyVar = () => {};
//
// anyVar.toUpperCase();
// anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;

unknownVar = 10;
unknownVar = "string";
unknownVar = true;
unknownVar = {};
unknownVar = () => {};

// num = unknownVar;
// unknownVar.toUpperCase();

if(typeof unknownVar === "string") {    // 타입 정제
    unknownVar.toUpperCase();
}