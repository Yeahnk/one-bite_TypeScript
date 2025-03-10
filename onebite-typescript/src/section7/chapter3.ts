/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
    key: K;
    value: V;
}

let keyPair: KeyPair<string, number> = {
    key: "key",
    value: 123,
};

let keyPair2: KeyPair<boolean, string[]> ={
    key: true,
    value: ["a", "b", "c"],
};

/**
 * 인덱스 시그니처
 */

interface numberMap {
    [key: string]: number;
}