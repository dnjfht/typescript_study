"use strict";
// Boolean
let boolean;
let falseBoolean = false;
// Number
let number;
let integer = 6;
let float = 1.2345;
// String
let string;
let firstName = "Doe";
// Array
// 한 가지 타입만 가지는 배열
let names1 = ["John", "Kim"];
let names2 = ["John", "Kim"];
// 여러 타입을 가지는 배열(유니언 타입 사용)
let array1 = ["John", 1, 2];
let array2 = ["John", 1, 2];
// 여러 타입을 단언 X any
let someArray = ["John", 1, [], {}, false];
// 배열은 interface나 type 별칭을 이용해서도 배열에 타입을 지정해줄 수 있다.
// interface, type
// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray = ["A", "B"];
let numberArray = [1, 2];
// stringArray.push("C");
// 'readonly string[]' 형식에 'push' 속성이 없습니다.ts(2339)
// numberArray[0] = 3;
// 'readonly number[]' 형식의 인덱스 시그니처는 읽기만 허용됩니다.ts(2542)
// Tuple
let tuple1;
tuple1 = ["a", 1];
// tuple1 = ["a", 1, 2];
// '[string, number, number]' 형식은 '[string, number]' 형식에 할당할 수 없습니다.
// 소스에 3개 요소가 있지만, 대상에서 2개만 허용합니다.ts(2322)
let users;
users = [
    [1, "John"],
    [2, "Doe"],
];
let tuple2;
tuple2 = ["a", 1];
// tuple2.push(2);
// 배열에 값을 더 추가해도 에러가 뜨지는 않는다.
// console.log(tuple2);
// 하지만 tsc -watch 명령어를 통하여 컴파일을 진행하면 에러가 뜨게 된다.
