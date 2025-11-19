

function runningSum( nums){
       let sum=0;
       let ran=[]
       for(let i of nums){
            sum+=i
            ran.push(sum)
       }
       return ran
}

console.log(runningSum([1,2,3,4]))