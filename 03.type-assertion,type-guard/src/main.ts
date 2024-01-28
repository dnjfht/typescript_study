const bodyElement = document.querySelector("body") as HTMLBodyElement;
bodyElement.innerText = "Hello";
// Typescript는 body가 확실히 있다고 확신할 수가 없다. 그렇기 때문에 null을 반환한다.
// 이럴 때 type 단원을 사용해서 에러를 처리를 해줄 수 있다. (우리는 body가 있다는 것을 알고 있기 때문)

// const bodyElement1 = document.querySelector("body");
// bodyElement1!.innerText = "Hello";
// ! => undefined와 null이 절대 아니라고 타입스크립트에게 말해준다.
// ! => exclamation/ bang operator 느낌표 연산자
// ! not null 타입 단언

// const bodyElement2 = document.querySelector("body");
//if (bodyElement2) {
//  bodyElement2.innerText = "Hello";
// }
// type guard

// 타입 단원을 잘못 쓴 예
function func(arg: string | null) {
  return (arg as string).toLowerCase();
}

func("hello");
func(null);
// string 타입 단원을 쓰게 되면 타입 에러는 사라지지만,
// 브라우저에서 실행시켰을 때 main.js:18 Uncaught TypeError: Cannot read properties of null (reading 'toLowerCase') 에러가 뜬다.
// func 함수의 인자로 null을 받았을 때는 toLowerCase 메소드를 실행시킬 수 없기 때문에 에러가 나오게 된 것이다.

// 이럴 때는 type 단원이 아닌, type guard를 사용해야 한다.
// 브라우저 콘솔창에서 에러가 사라진 것을 볼 수 있다.
function func2(arg: string | null) {
  if (arg) {
    return arg.toLowerCase();
  }
}

func2("hello");
func2(null);
