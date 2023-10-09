//asynmc and promises
//does not happen immediately
setTimeout(()=>{
    console.log('async function done')
},2000)
console.log('this will come first before async')