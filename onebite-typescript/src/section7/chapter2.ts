/**
 * map 메서드
 */

const array = [1, 2, 3, 4, 5];
const newArray = array.map((value) => value * 2);
// [2, 4, 6, 8, 10]

function map<T, U>(arr: T[], callback: (item: T) => U){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(callback(arr[i]));
    }

    return result;
}

map(array, (value) => value * 2);
map(["a", "b", "c"], (value) => parseInt(value));

/**
 * forEach 메서드
 */

const array2 = [1, 2, 3, 4, 5];
array2.forEach((value) => console.log(value));

function forEach<T>(arr: T[], callback: (item: T) => void){
    for(let i = 0; i < arr.length; i++){
        callback(arr[i]);
    }
}

forEach(array2, (value) => value.toFixed());

forEach(["a", "b", "c"], (value) => console.log(value));