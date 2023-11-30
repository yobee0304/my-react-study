let a = 1; // 대입 연산자

let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

let c = "1";
let d = "2";
let e = 2;

console.log(c + d); // 연결 연산
console.log(c + e);

let f = 5;
f += 5; // f = f + 5 (복합 연산자)

console.log(f);

let g = 10;

// 전위 / 후위 연산자
console.log(++g); // g = g + 1;
console.log(g++);
console.log(--g); // g = g - 1;
console.log(g--);

// 논리 연산자
// ! = NOT
console.log(!true); // false
// && = AND
console.log(true && true);  // true
// || = OR
console.log(true || false); // false

// 비교 연산자
let compareA = 1 == "1";    // 값만 비교
console.log(compareA);  // true
let compareB = 1 === "1";   // 데이터 타입도 비교
console.log(compareB);  // false

let compareC = 1 > 2;
console.log(compareC);

let strA = "1";
console.log(typeof strA);   // string

// null 병합 연산자
let aa;

aa = aa ?? 10;  // a가 null이나 undefined인 경우 10을 선택
console.log(aa);