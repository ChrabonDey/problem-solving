function sequence(inputArray){
     for(let i=1;i<inputArray.length;i++){
        if(inputArray[i]<inputArray[i-1]){
            return false
        }
     }
}

/* or*/

function sequnce2(inputArray){
   return  inputArray.every((val,i,arr)=>i===0 ||val>=arr[i-1])
}


