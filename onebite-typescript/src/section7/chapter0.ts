/**
 * 제네릭
 */

// 제네릭 함수
// T -> 타입 변수
function func<T>(value: T): T {
  return value;
}

let num = func(10);
num.toFixed();

let str = func('hello');
str.toUpperCase();

let bool = func(true);
if(bool){
    console.log('bool is true');
}

let arr = func<[number, number, number]>([1, 2, 3]);