"use strict";
function add(a, b) {
    return a + b;
}
add("hello", "world");
// add(1, "world");
// number와 string을 함께 매개변수로 주면 error가 나게 된다.
add(1, 1);
function saySomething(word) {
    if (typeof word === "string") {
        return word;
    }
    else if (Array.isArray(word)) {
        return word.join(" ");
    }
    throw new Error("unable to say something");
}
saySomething(["hello", "world"]);
