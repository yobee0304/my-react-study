// 삼항 연산자

let a = 3;
if(a >= 0) {
    console.log("양수");
} else {
    console.log("음수");
}

a >= 0 ? console.log("양수") : console.log("음수");

let b = [];

if(b.length === 0) {
    console.log("빈 배열");
} else {
    console.log("안 빈 배열");
}

b.length === 0 ? console.log("빈 배열") : console.log("안 빈 배열");

const arrayStatus = b.length === 0 ? "빈 배열" : "안 반 배열";
console.log(arrayStatus);

// Truthy-Falsy 활용
let c = [];

const result = c ? true : false;
console.log(result);

// TODO : 학점 계산 프로그램
// 90점 이상 A+
// 50점 이상 B+
// 둘 다 아니면 F
let score = 100;

score >= 90 ? console.log("A+") : score >= 50 ? console.log("B+") : console.log("F");
// 중첩 삼항 연산자는 가독성이 매우 떨어짐 => if문 사용 권장

if(score >= 90) {
    console.log("A+");
} else if(score >= 50) {
    console.log("B+");
} else {
    console.log("F");
}