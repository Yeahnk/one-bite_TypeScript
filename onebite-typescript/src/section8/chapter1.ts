/**
 * 인덱스드 엑세스 타입
 */

type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number
    };
}[];

function printAuthorInfo (author: PostList[number]['author']){
    console.log(`${author.id} ${author.name}`);
}

const post: PostList[number] = {
    title: '제목',
    content: '내용',
    author: {
        id: 1,
        name: '김',
        age: 20
    }
}

printAuthorInfo(post.author);

type Tup = [string, number, boolean];

type Tup0 = Tup[0]; // string
type Tup1 = Tup[1]; // number
type Tup2 = Tup[2]; // boolean

type TupNum = Tup[number]; // string | number | boolean