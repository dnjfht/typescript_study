"use strict";
// function getArrayLength(arr: number[] | string[] | boolean[]): number {
//   return arr.length;
// }
// 매개변수로 다양한 값들을 받기 위해 Type을 Union으로 넣어줘야 한다.
// 그런데 이렇게 해주면 매개변수의 Type이 바뀔 때마다 계속 새롭게 타입을 Union으로 넣어줘야 해서 번거롭다.
// 이 코드를 Generic을 사용하여 더 깔끔하게 만들어보도록 하겠다.
// Generic을 사용하면 매개변수 Type을 지정하는 곳 앞에 <T> 이런 식으로 나타낼 수 있다.
// 그리고 매개변수 Type을 지정하는 곳에 T[]라고 적어준다. => 배열이라는 의미다.
// 그 다음은 함수를 호출하면서 매개변수를 넣어주는 곳 앞에 <number> 이런 식으로 적어준다.
// <> 안에 number라고 작성해준 것을 T가 받고, 그렇게 되면 최종적으로 T[] => number[]가 되는 것이다.
// T는 관습적으로 주로 T라고 많이 적어주는 거지, Type이나 다른 단어를 적어줘도 문제가 되지 않는다.
function getArrayLength(arr) {
    return arr.length;
}
const array1 = [1, 2, 3];
const array2 = ["a", "b", "c"];
const array3 = [true, false, true];
getArrayLength(array1);
getArrayLength(array2);
getArrayLength(array3);
const car = {
    name: "Car",
    color: "red",
    option: {
        price: 1000,
    },
};
const bike = {
    name: "Bike",
    color: "green",
    option: true,
};
// Generic을 사용하면 재사용성이 높은 함수와 Class를 생성할 수 있고
// any처럼 Type을 직접 지정하지는 않지만 Type을 체크해서 컴파일러가 오류를 찾을 수 있게 해준다.
// 만약, Generic을 사용할 때, 만약 매개변수가 두 개라면?
// parameter 2개
const makeArr = (x, y) => {
    return [x, y];
};
const arr = makeArr(1, 5);
const arr2 = makeArr("a", "b");
const arr3 = makeArr(4, "b");
// Generic에 기본 값을 설정해줄 수도 있다.
const makeArr1 = (x, y) => {
    return [x, y];
};
const arr4 = makeArr1("a", "b");
// Generic Y는 기본값이 string Type으로 설정돼 있는 것이다.
// 이번에는 Generic을 Extends랑 같이 사용해보도록 하겠다.
const makeFullName = (obj) => {
    return Object.assign(Object.assign({}, obj), { fullName: obj.firstName + " " + obj.lastName });
};
makeFullName({ firstName: "John", lastName: "Doe", location: "Seoul" });
// 매개변수 Type을 설정해줄 때 location 속성은 추가하지 않았는데,
// 함수 호출시 매개변수로 location을 넣어주려고 하니 error가 난다.
// 함수를 호출할 때 항상 fullName이랑 lastName이 들어가게 하고, 그 외에 다른 속성들도 들어올 수 있도록 설정할 때도 Generic을 사용할 수 있다.
// extends를 사용하여 firstName과 lastName은 항상 들어오게끔 하고, 그 다음에 새로운 속성이 들어갈 수 있게끔 하는 것이다.
// makeFullName({ lastName: "Doe", location: "Seoul" });
// firstName이나 lastName을 빼버리면 바로 error가 나게 된다.
// React에서 Generic 사용하기
// const ReactComponent: React.FC<Props> = ({name}) => {
//   // React에서 Type을 줄 때 functional component의 Type을 줄 때 react.FC<Props>를 넣어주게 하는데
//   // 그 이유는 props로 어떤 값이 들어올지 확실하게 모르기 때문이다.
//   const [state] = useState<{name: string | null}>({name: ""});
//   // useState도 보면 generic Type을 받고 있는데,
//   // 초기값이 어떻게 될지 모르기 때문에, generic으로 Type을 줄 수 있다.
//   state.name
//   return <div>{name}</div>;
// }
