const arr = ["a", "b", "c"];

for(let i=0; i < arr.length; i++) {
    console.log(arr[i]);
}

let person = {
    name: "이정환",
    age: 25,
    tall: 175
};

const personKeys = Object.keys(person);

for(let i=0; i<personKeys.length; i++) {
    const curKey = personKeys[i];
    const curValue = person[curKey];
    
    console.log(curValue);
}

const personValues = Object.values(person);

for(let i=0; i<personValues.length; i++) {
    console.log(personValues[i]);
}