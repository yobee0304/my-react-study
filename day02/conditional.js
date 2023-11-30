let a = 5;

if(a >= 7) {
    console.log("7 이상입니다.");
} else if(a >= 5) {
    console.log("5 이상입니다.");
} else {
    console.log("5 미만입니다.");
}

let country = "ko";

if(country === "ko"){
    console.log("한국");
} else if(country === "cn") {
    console.log("중국");
} else if(country === "jp") {
    console.log("일본");
} else {
    console.log("미분류");
}

switch(country) {
    case 'ko':
        console.log("한국");
        break;
    case 'cn':
        console.log("중국");
        break;
    case 'jp':
        console.log("일본");
        break;
    default:
        console.log("미분류");
        break;
}