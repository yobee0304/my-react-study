function hello() {
    return "hello";
}

function delay (ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function helloAsync() {
    // return delay(3000).then(() => {
    //     return "hello Async";
    // });

    // await : 비동기 함수가 동기적으로 작동
    await delay(3000);
    return "hello Async";
}

console.log(hello());
console.log(helloAsync());

helloAsync().then((res) => {
    console.log(res);
});

async function main() {
    const res = await helloAsync();
    console.log(res);
}

main();