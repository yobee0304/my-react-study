function getArea() {
    let width1 = 10;
    let height1 = 20;
    
    let area1 = width1 * height1;
    
    console.log(area1);
} // 함수 선언식, 함수 선언 방시의 함수 생성

getArea();
console.log("함수 실행 완료");

function getArea2(width, height) {
    let area = width * height;
    console.log(area);
}

getArea2(10, 30);
console.log("함수 실행 완료");

let count = 1;  // 전역 변수 (global)
                // 함수 외부에서 선언되어 어디에서나 접근 가능한 변수

function getArea3(width, height) {
    console.log(count);
    return width * height;
}

let area1 = getArea3(10, 40);

console.log(helloB());
// console.log(helloA()); // 함수 표현식 호출 불가

let helloA = function () {
    return "안녕하세요 여러분";
};  // 함수 표현식

function helloB() {
    return "안녕하세요 여러분";
}   // 함수 선언식 => 실행 최상단으로 이동

console.log(helloA);

const helloText = helloA();
console.log(helloText);

// 화살표 함수
let helloC = () => {
    return "안녕하세요 여러분";
}

// return만 존재하는 경우
let helloD = () => "안녕하세요 여러분";