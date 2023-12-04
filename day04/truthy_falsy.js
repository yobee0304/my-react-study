// Truthy
let a = "string";

if (a) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}

// Falsy
let b = undefined;
// let b = null;
// let b = 0;
// let b = NaN;
// let b = "";

if (b) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}

// boolean형이 아닌 값에 대해서 javascript는 특정 기준으로 true/false를 판단

const getName = (person) => {
    // if(person === undefined || person === null) {
    //     return "객체가 아닙니다.";
    // }

    if(!person) {
        return "객체가 아닙니다.";
    }

    return person.name;
};

let person = { name: "이정환" };
const name = getName(person);
console.log(name);

// 단락 회로
const getName2 = (person) => {
    const name = person && person.name;
    return name || "객체가 아닙니다.";
};

const name2 = getName2(person);
console.log(name2);