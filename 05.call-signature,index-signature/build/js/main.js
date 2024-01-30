"use strict";

const post1 = {
  id: 1,
  title: "post 1",
  getLikeNumber(like) {
    return like;
  },
};
post1.getLikeNumber(1);
const music1 = {
  id: 1,
  title: "music 1",
};

// Type을 지정해줄 때, 속성이 id랑 title 밖에 없을 줄 알았지만 계속 music1 객체에 무언가 추거되고 있다.
// 이때 인덱스 시그니처를 사용할 수 있다.

music1["description"] = "music1 description";
music1["artist"] = "aespa";

const userName = ["John", "Kim", "Joe"];
userName[3] = "Yoo";
