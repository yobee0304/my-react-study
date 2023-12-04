// 조건문 업그레이드

function isKoreanFood(food) {
    // if(food === "불고기" || food === "비빔밥" || food === "떡볶이") {
    //     return true;
    // }

    if(["불고기", "비빔밥", "떡볶이"].includes(food)){
        return true;
    }

    return false;
}

const getMeal = (mealType) => {
    if(mealType === "한식") return "불고기";
    if(mealType === "양식") return "파스타";
    if(mealType === "중식") return "멘보샤";
    if(mealType === "일식") return "초밥";
    return "굶기";
}

const meal = {
    한식: "불고기",
    양식: "파스타",
    중식: "멘보샤",
    일식: "초밥",
    인도식: "카레"
}

const getMeal2 = (mealType) => {
    return meal[mealType] || "굶기";
}

// 비 구조화 할당
let arr = ["one", "two", "three"];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// let [one, two, three] = arr;
// let [one, two, three, four = "four"/*default 설정*/] = ["one", "two", "three"];

// console.log(one, two, three);

// Swap
let a = 10;
let b = 20;

[a, b] = [b, a];
console.log(20, 10);

// 객체의 비구조화 할당
let object = {one: "one", two: "two", three: "three", name: "이정환"};

// 키의 순서 상관 X
// 키 값을 기준으로 결과 세팅
// let {name, one, two, three} = object;
// console.log(one, two, three, name);
let {name: myName, one: myOne, two, three} = object;
console.log(myName, myOne, three, name);

// Spread 연산
const cookie = {
    base: "cookie",
    madeIn: "korea"
};

const chocochipCookie = {
    ...cookie,  // spread 연산자
    toping: "chocochip"
}

const blueberryCookie = {
    ...cookie,
    toping: "blueberry"
};

const strawberryCookie = {
    ...cookie,
    toping: "strawberry"
};

const noTopingCookies = ['촉촉한쿠키', '안촉촉한쿠키'];
const topingCookies = ["바나나쿠키", "블루베리쿠키", "딸기쿠키", "초코칩쿠키"];
const allCookies = [...noTopingCookies, ...topingCookies];