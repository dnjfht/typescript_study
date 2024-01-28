// Boolean
let boolean: boolean;
let falseBoolean: boolean = false;

// Number
let number: number;
let integer: number = 6;
let float: number = 1.2345;

// String
let string: string;
let firstName: string = "Doe";

// Array
// 한 가지 타입만 가지는 배열
let names1: string[] = ["John", "Kim"];
let names2: Array<string> = ["John", "Kim"];

// 여러 타입을 가지는 배열(유니언 타입 사용)
let array1: (string | number)[] = ["John", 1, 2];
let array2: Array<string | number> = ["John", 1, 2];

// 여러 타입을 단언 X any
let someArray: any[] = ["John", 1, [], {}, false];

// 배열은 interface나 type 별칭을 이용해서도 배열에 타입을 지정해줄 수 있다.
// interface, type

// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray: readonly string[] = ["A", "B"];
let numberArray: ReadonlyArray<number> = [1, 2];

// stringArray.push("C");
// 'readonly string[]' 형식에 'push' 속성이 없습니다.ts(2339)
// numberArray[0] = 3;
// 'readonly number[]' 형식의 인덱스 시그니처는 읽기만 허용됩니다.ts(2542)

// Tuple
let tuple1: [string, number];
tuple1 = ["a", 1];
// tuple1 = ["a", 1, 2];
// '[string, number, number]' 형식은 '[string, number]' 형식에 할당할 수 없습니다.
// 소스에 3개 요소가 있지만, 대상에서 2개만 허용합니다.ts(2322)

let users: [number, string][];
users = [
  [1, "John"],
  [2, "Doe"],
];

let tuple2: [string, number];
tuple2 = ["a", 1];
// tuple2.push(2);
// 배열에 값을 더 추가해도 에러가 뜨지는 않는다.
// tuple이라고 하더라도 실제로 push 메소드를 이용해서 값을 넣는 것은 허용된다.
// console.log(tuple2);
// 하지만 tsc -watch 명령어를 통하여 컴파일을 진행하면 에러가 뜨게 된다.

// tuple2.push(false);
// 하지만 이렇게 타입이 맞지 않는 값을 push하려고 하면 타입 에러가 뜬다.
// 'boolean' 형식의 인수는 'string | number' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)

// any
let any: any = "abc";
any = 1;
any = [];

// unknown
// string, number, boolean 등 모두 값으로 사용할 수 있다.
// 하지만 다른 변수의 값으로는 할당을 해줄 수 없다.
let unknown: unknown = false;
// let string1: string = unknown;
// 'unknown' 형식은 'string' 형식에 할당할 수 없습니다.ts(2322)

let string2: boolean = unknown as boolean;
// as type => 이렇게 type 단원이라는 것을 사용하면 할당을 할 수 있게 된다.
// 개발자가 Typescript보다 타입을 더 잘 알고 있기 때문에 이 타입이 맞다고 Typescript에게 얘기를 해주는 것이다.
// 한 마디로 이거에 대해서 에러를 발생시키지 말라고 얘기를 하는 것이다.

// Object
let obj: object = {};
let arr: object = [];
// let null: object = null;
// 여기서 에러가 발생하는 이유는, tsconfig.json에서 strict : true로 설정을 해두면 object 타입에 null을 할당할 수 없게 되는 것이다.
let date: object = new Date();

// 객체를 생성할 때 타입을 그냥 object로 해주기 보다는 개별적으로 속성의 타입을 지정해주는게 좋다.
// 이렇게 하면 새로운 속성이 추가될 경우, 타입 에러가 발생하게 된다.
const obj1 = ({ id: number, title: string } = {
  id: 1,
  title: "title1",
  // description : "description1"
});

// union
let union: string | number;
union = "hi";
union = 123;
// union = [];
// 'never[]' 형식은 'string | number' 형식에 할당할 수 없습니다.ts(2322)

// function
let func1: (arg1: number, arg2: number) => number;
func1 = function (x, y) {
  return x * y;
};

let func2: () => void;
func2 = function () {
  console.log("hi");
};

// Null, Undefined
// let number1: number = undefined;
// 'undefined' 형식은 'number' 형식에 할당할 수 없습니다.ts(2322)
// tsconfig.json에서 "strictNullChecks": true로 설정을 해두면 타입 에러가 발생한다.
// number 타입에 undefined를 할당하려고 하니 에러가 나야 정상이다.

// let string9: string = null;
// let object: { a: 10; b: false } = undefined;
// let array: any[] = null;
// let undefined1: undefined = null;
// let null1: null = undefined;
// let void1: void = null;

// 실제로 Typescript를 사용할 때는 strickNullChecks를 true로 설정해줘야 한다.

let void1: void = undefined;
// 그런데 return하는 값이 없는 함수는 undefined를 출력하기 때문에
// strickNullChecks를 true로 설정해둬도 void 타입에 undefined를 할당할 수는 있다.

// void
function greeting(): void {
  console.log("hi");
}

const hi: void = greeting();
console.log(hi);
// undefined
// 하지만 함수의 타입으로 undefined를 지정해줄 수는 없다.

// never
// 항상 오류를 출력하거나 return 값을 절대로 내보내지 않음을 확신할 때 사용한다.
function throwError(): never {
  throw new Error("error");
}

// 계속 while에서 돌고 돌기 때문에 빠져나가지 못한다. 그렇기 때문에 return 값을 절대로 내보내지 않음을 확신한다.
function keepProcessing(): never {
  while (true) {
    console.log("hi");
  }
}

// 그리고 빈 배열을 타입으로 잘못 선언한 경우에도 never 타입을 갖는다.
const never: [] = [];
// 배열 안에 아무 것도 push를 못해야 정상이지만, 이런 타입 에러가 뜨게 된다.
// 'number' 형식의 인수는 'never' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)
// never.push(1);
// 한 마디로 타입이 never[] 이런 식으로 지정되었다고 볼 수 있다.
// const never: nerver[] = [];
