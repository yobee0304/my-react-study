// 객체 선언
let person1 = new Object(); // 생성자 방식
let person2 = {};   // 객체 리터럴 방식

let person = {
    key: "value",   // 프로퍼티 (객체 프로퍼티)
    key1: 123,
    key2: true,
    key3: undefined,
    key4: [1, 2],
    key5: function() {}
};

console.log(person);
console.log(person.key1);   // 점 표기법
console.log(person["key"]); // 괄호 표기법

let newPerson = {
    name: "이정환", // 멤버
    age: 25,
    say: function() {
        console.log(`Hello! I'm ${this.name}`);
    }   // 메서드
};

// 괄호 표기법을 활용한 동적 프로퍼티 접근 방법
function getPropertyValue(key) {
    return newPerson[key];
}

console.log(getPropertyValue("name"));

// 프로퍼티 추가
newPerson.location = "한국";
newPerson["gender"] = "남성";
console.log(person);

// 프로퍼티 수정
newPerson.name = "이정환 A";
newPerson["age"] = 40;
console.log(person);

// 프로퍼티 삭제
newPerson.name = null;
console.log(person);

newPerson.say();

console.log(newPerson.sample);
console.log(`name : ${"name" in newPerson}`);
console.log(`sample : ${"sample" in newPerson}`);