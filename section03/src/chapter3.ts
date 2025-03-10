/**
 * 객체 타입 간의 호환성
 * -> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은지
 */

type Animal ={
    name: string;
    color: string;
};

type Dog ={
    name: string;
    color: string;
    breed: string;
};

let animal: Animal = {
    name: "기린",
    color: "yellow",
};

let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
};

animal = dog;
// dog = animal;

type Book = {
    name: string;
    price: number;
};

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
    name: "자바의 정석",
    price: 33000,
    skill: "java",
};

book = programmingBook;

/**
 * 초과 프로퍼티 검사
 * 객체 타입 변수를 초기화할 때 객체 리터럴을 사용하면
 * 해당 객체에 없는 프로퍼티가 있으면 안됨
 **/ 
let book2: Book = {
    name: "자바의 정석",
    price: 33000,
    // skill: "java",
};