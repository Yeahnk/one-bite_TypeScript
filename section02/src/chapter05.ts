// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
    ADMIN,
    USER,
    GUEST,
}

enum Language {
    KOREAN = 'ko',
    ENGLISH = 'en',
    JAPANESE = 'jp',
    CHINESE = 'cn',
}

const user1 = {
    name : "이정환",
    role : Role.ADMIN,   // 0 <- 관리자
    language : Language.KOREAN,
};

const user2 = {
    name : "홍길동",
    role : Role.USER,   // 1 <- 일반 사용자
    language: Language.ENGLISH,
};

const user3 = {
    name : "김철수",
    role : Role.GUEST,   // 2 <- 게스트
};

console.log(user1, user2, user3);   // 0