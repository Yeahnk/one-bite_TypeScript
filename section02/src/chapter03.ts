// object
// 객체 리터럴 타입
let user: {
    id?: number;    // ? -> 선택적 property (optional property)
    name: string;
} = {
    id: 1,
    name: "이정환",
};

let config: {
    readonly apiKey: string;
} = {
    apiKey: "MY API KEY",
};