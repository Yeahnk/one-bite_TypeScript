/**
 * 첫번째 케이스
 */

function swap<T, U>(a: T, b: U){
    return [b, a];
}

const [a, b] = swap(10, 'hello');

/**
 * 두번째 케이스
 */

function returnFirstValue<T>(data: [T, ...unknown[]]){
    return data[0];
}

let num = returnFirstValue([1, 2, 3]);

let str = returnFirstValue(['a', 'b', 'c']);

/**
 * 세번째 케이스
 */

function getLength<T extends { length: number }>(data: T) {
    return data.length;
}

let var1 = getLength([1, 2, 3]);    // 3
let var2 = getLength('hello');    // 5
let var3 = getLength({ length: 10});    // 10
// let var4 = getLength(10);   // Error