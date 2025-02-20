// 타입 별칭

type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

let user: User = {
    id: 1,
    name: "이정환",
    nickname: "jeonghwan",
    birth: "1992-07-15",
    bio: "안녕하세요",
    location: "서울",
};

// 인덱스 시그니처
type CountryCodes = {
    [key : string] : string;
};

let countrycodes: CountryCodes = {
    Korea : "KR",
    UnitedStates : "US",
    Germany : "DE",
};

type CountryNumberCodes = {
    [key : string] : (number | string);
    Korea : string;
};

let countryNumberAndStringCodes: CountryNumberCodes = {
    Korea : "kr",
};