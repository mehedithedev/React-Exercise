const recordVideoOne= new Promise((resolve, reject)=>{
    resolve('Video one has been recorded');
})
const recordVideoTwo = new Promise((resolve, reject)=>{
    resolve('Video two has been recorded')
})

Promise.all([
    recordVideoOne,
    recordVideoTwo
]).then((message)=>{
    console.log(message)
}) 

// Promise.race([
//     recordVideoOne,
//     recordVideoTwo
// ]).then((message)=>{
//     console.log(message)
// })