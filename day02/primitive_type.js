// 숫자형 (number)
let age = 25;   // 정수
let tall = 175.9;   // 실수
console.log(age + tall);

let inf = Infinity; // 무한대
let minusInf = -Infinity;
let nan = NaN;  // 수학적 연산의 실패

// 문자열 (String)
let name = "charlie";
let name2 = "안찬영";
let name3 = `charlie ${name2}`; // "template literal"
console.log(name3);

// boolean (True/False)
let isSwitchOff = false;

// Null
let a;
console.log(a); // undefined
a = null;
console.log(a); // null

// undefined
let variable;
console.log(variable); // undefined

// 형변환 (Casting)
let numberA = 12;
let numberB = "2";
console.log(numberA * numberB); // numberB를 자동으로 숫자형으로 변환 => "묵시적 형변환"
console.log(numberA + numberB); // numberA를 자동으로 문자형으로 변환
console.log(numberA + parseInt(numberB)); // 개발자가 의도적으로 형변환 => "명시적 형변환"