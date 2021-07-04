// know performance of a task


const startTime = performance.now()

for(let i=0;i<=10; i++){
    console.log(i);
}

const endTime = performance.now()

console.log(`loop took to execution time from ${startTime} to ${endTime}`);