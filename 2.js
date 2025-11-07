function sumOfNumbers(params1,params2){
    return params1+params2
}

function totalSum(...params1){
    let total=0
     params1.forEach(item=>{
        total+=item
    })
    return total
}

console.log(totalSum(1,2,3,4))