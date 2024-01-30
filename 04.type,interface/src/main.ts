// interface : extends 키워드를 사용해서 확장을 해줄 수 있다.
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const bear1: Bear = {
  name: "honey bear",
  honey: true,
};

// const bear2: Animal = {
//   name : "honey bear",
//   honey: true
// }
// interface Animal 안에는 honey 속성이 없으므로 type 에러가 난다.

type Food = {
  name: string;
};

// Type : Intersection(&)을 이용해서 확장을 해줄 수 있다.

type Hamburger = Food & {
  price: number;
};

const hamburger: Hamburger = {
  name: "cheeze burger",
  price: 5400,
};

// Interface : 선언 병합이 가능하다.

interface Clothe {
  name: string;
}

interface Clothe {
  price: number;
}

const jean: Clothe = {
  name: "blue jean",
  price: 50000,
};

// Type : 선언 병합이 불가능하다.

type Exercise = {
  name: string;
};

// // 'Exercise' 식별자가 중복되었습니다.ts(2300)
// type Exercise = {
//   hard: boolean;
// }

// const run: Exercise = {
//   name: "run",
//   hard: false
// }
// // 개체 리터럴은 알려진 속성만 지정할 수 있으며 'Exercise' 형식에 'hard'이(가) 없습니다.ts(2353)

// interface와 type 모두 Union 사용 가능.
// Union 유형을 사용하면 개발자가 type A 또는 type B가 될 수 있는 새 Type을 만들 수 있다.
// | 연산자를 사용하여 Type과 Interface를 모두 사용하여 새로운 Union 유형을 생성한다.
// 그러나 선언은 항상 type이어야 한다.

interface Animal2 {
  name: string;
}

interface Bear2 {
  honey: boolean;
}

type NewType = Animal2 | Bear2;

const bear2: NewType = {
  name: "honey bear",
  honey: true,
};

type Animal3 = {
  name: string;
};

type Bear3 = {
  honey: boolean;
};

type NewType2 = Animal3 | Bear3;

const bear3: NewType2 = {
  name: "honey bear",
  honey: true,
};
