// 배열
let numArr: number[] = [1,2,3];

let strArr: string[] = ['hello', 'its', 'yeeun'];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양한 경우
let multiArr: (string | number)[] = [1, 'hello'];

// 다차원 배열 타입 정의
let doubleArr: number[][] = [
    [1,2,3],
    [4,5]
]

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1,2];

let tup2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
    ["이정환", 1],
    ["권예은", 2],
    ["유밀", 3]
]