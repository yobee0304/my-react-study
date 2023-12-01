let arr1 = new Array();
let arr2 = [];

// let arr = [1,"2",true,null,undefined, {}, [], function() {}];
let arr = [1, 2, 3, 4, 5];
console.log(arr);
// 특정 요소에 접근
console.log(arr[0]);
// 추가
arr.push(6);
console.log(arr);

console.log(arr.length);

const newArr = [];

arr.forEach(function (elm) {
    newArr.push(elm * 2);
});
console.log(newArr);

const newArr1 = arr.map((elm) => {
    return elm * 2;
});
console.log(newArr1);

let number = 3;
console.log(arr.includes(number));
console.log(arr.indexOf(number));   // number가 배열에 없으면 -1

const colors = [
    { num: 1, color: "red"},
    { num: 2, color: "black"},
    { num: 3, color: "blue"},
    { num: 4, color: "green"},
    { num: 5, color: "blue"}
];

console.log(
    colors.findIndex((elm) => {
        return elm.color === "blue"
    })
);

const element = colors.find((elm) => {
    return elm.color === "blue";
});
console.log(element);

// callback 함수가 true를 반환하는 값을 배열로 제공
console.log(colors.filter((elm) => elm.color === "blue"));

console.log(colors.slice(0, 2));

const colors1 = [
    { num: 1, color: "red"},
    { num: 2, color: "black"},
    { num: 3, color: "blue"}
];
const colors2 = [
    { num: 4, color: "green"},
    { num: 5, color: "blue"}
];
console.log(colors1.concat(colors2));

let chars = ["나", "다", "가"];
chars.sort();   // 원본 배열을 정렬
console.log(chars);

let numbers = [0, 1, 3, 2, 10, 30, 20];
const compare = (a,b) => {
    // 1. 같다
    if(a > b) {
        return 1;
    }

    // 2. 크다
    if(a < b) {
        return -1;
    }

    // 3. 같다
    return 0;
};

numbers.sort(compare);
console.log(numbers);

const strs = ["이정환", "님", "안녕하세요", "또오셨군요"];
console.log(strs.join(" "));