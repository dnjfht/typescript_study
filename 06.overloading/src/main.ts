function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
  return a + b;
}

add("hello", "world");
// add(1, "world");
// number와 string을 함께 매개변수로 주면 error가 나게 된다.
add(1, 1);

// function saySomething(word: string): string {
//   return word;
// }

// saySomething(["hello", "world"]);
// 함수를 조금 변환해서 hello 하나만 넣을 수 있는 게 아니라,
// ["hello", "world"] 이런 식으로 배열을 넣으면 "hello world"가 나올 수 있기를 원한다.

// 첫 번째 방법 : 매개변수에 직접적으로 union Type으로 주는 방법을 사용한다.

// function saySomething(word: string | string[]): string {
//   if (typeof word === "string") {
//     return word;
//   } else if (Array.isArray(word)) {
//     return word.join(" ");
//   }
//   // 함수에 끝 return 문이 없으며 반환 형식에 "undefined"가 포함되지 않습니다.
//   // => string 반환 Type에는 undefined가 없기 때문에 발생한다.
//   // 매개변수가 string도, string으로 이뤄진 배열도 아닐 경우, error를 띄워준다.
//   throw new Error("unable to say something");
// }

// 두 번째 방법 : 함수 오버로딩을 사용해도 된다.

function saySomething(word: string): string;
function saySomething(word: string[]): string;
function saySomething(word: any): any {
  if (typeof word === "string") {
    return word;
  } else if (Array.isArray(word)) {
    return word.join(" ");
  }
  throw new Error("unable to say something");
}

saySomething(["hello", "world"]);
