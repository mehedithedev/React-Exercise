let p = new Promise((resolve, reject)=>{
    let a = 1+4
    if (a===3){
        resolve(`Success`)
    } else{
        reject("Failed ")
    }
})

p.then((messege)=>{
    console.log('This is in the the then '+ messege)
}).catch((messege)=>{
    console.log('This is in the catch '+ messege)
})