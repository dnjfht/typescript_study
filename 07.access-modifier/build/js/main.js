"use strict";
// 그리고 현재 속성이 너무 복잡하게 되어 있기 때문에 정리를 한 번 해보도록 하겠다.
// class Post {
//   여기서 접근 제어자로 public을 선언할 경우, 생략할 수 없다.
//   constructor(private id: number, procted title: string){}
// }
class Post {
    // 이제 접근 제어자를 설정해줄 수 있다.
    // 접근 제어자는 총 세 가지가 있다. => public, protected, private
    // public : defualt 값이며, 어디서나 접근 가능하다. public은 생략 가능하다.
    // protected : 클래스 내, 상속 받은 자식 클래스에서 접근 가능하다.
    // private : 클래스 내에서만 접근 가능하다.
    constructor(id, title) {
        // Typescript에서는 this로 접근하는 속성들을 위한 Type을 class body 안에 넣어줘야 한다.
        // 초기값 설정도 해줄 수 있다.
        this.id = 0;
        this.title = "";
        // Type error 발생
        // 'Post' 형식에 'id' 속성이 없습니다.
        // 'Post' 형식에 'title' 속성이 없습니다.
        this.id = id;
        this.title = title;
    }
    getPost() {
        return `postId: ${this.id}, postTitle: ${this.title}.`;
    }
}
let post = new Post(1, "title 1");
// Post Class의 해당 하위 Class
class PostB extends Post {
    getPost() {
        return this.title;
        // 여기서 접근 제어자가 protected로 되어 있는 title을 가져오면 error가 발생하지 않는다.
        // return this.id;
        // 접근 제어가가 private으로 되어 있는 id는 하위 Class에서도 사용이 불가능하다.
    }
}
// console.log(post.id, post.title);
// 1, "title 1"
// 접근 제어자를 public으로 설정해두면 어디서 접근해도 error가 뜨지 않는다.
// 만약 접근 제어자를 protected, private으로 설정해두면 Class 밖에서 접근시 erorr가 뜨게 된다.
//'title' 속성은 보호된 속성이며 'Post' 클래스 및 해당 하위 클래스 내에서만 액세스할 수 있습니다.
