// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): void {
  console.log('hello');
}

function func2(): void {
  console.log('world');
}

let a: void;
// a = 1; // Error
// a = "string"; // Error
// a = null; // Error
// a = {}; // Error
a = undefined; // OK

// never
// never -> 결코 발생하지 않는 값
// 불가능한 타입

function func3(): never {
    while (true) {}
}

function func4(): never {
    throw new Error();
}