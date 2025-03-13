/**
 * 맵드 타입
 */

interface User {
    id: number;
    name: string;
    age: number;
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser(id: number): User {
    return {
        id,
        name: 'user',
        age: 23,
    };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: User) {
}

updateUser({
    id: 1,
    name: 'kim',
    age: 20,
});