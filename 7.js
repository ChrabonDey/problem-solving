const minimum=(num)=>{
    const num1=num.toString().split("").sort();
    const sum=Number(num1[0]+num[2])+Number(num[1]+num[3])
        
     return sum;
}

console.log(minimum(2956))