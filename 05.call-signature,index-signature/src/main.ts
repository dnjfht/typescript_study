// getLikeNumber 메소드 Type을 재사용하고 싶다면 getLikeNumber라는 interface를 따로 만들어주면 된다.
interface getLikeNumber {
  (like: number): number;
}

interface Post {
  id: number;
  title: string;
  getLikeNumber: getLikeNumber;
}

const post1: Post = {
  id: 1,
  title: "post 1",
  getLikeNumber(like: number) {
    return like;
  },
};

post1.getLikeNumber(1);
// 이 식은 호출할 수 없습니다. 'getLikeNumber' 형식에 호출 시그니처가 없습니다.ts(2349)
// 재사용을 위하여 따로 만들어둔 getLikeNumber interface 안에 이렇게 추가해주면 된다.
// (like: number): number; => 이것이 바로 호출 시그니처이다.

interface Music {
  [key: string]: unknown;
  // 인덱스 시그니처
  id: number;
  title: string;
}

const music1: Music = {
  id: 1,
  title: "music 1",
};

// Type을 지정해줄 때, 속성이 id랑 title 밖에 없을 줄 알았지만 계속 music1 객체에 무언가 추거되고 있다.
// 이때 인덱스 시그니처를 사용할 수 있다.
music1["description"] = "music1 description";
music1["artist"] = "aespa";

interface Names {
  // 배열 시그니처
  // item => 배열의 index를 일컫는다.
  // item이 아닌 다른 이름을 지정해서 사용해도 좋다.
  [item: number]: string;
}

const userName: Names = ["John", "Kim", "Joe"];
userName[3] = "Yoo";
