

function elementToReplace(inputArray,toReplace,subtractionElem){
      inputArray.forEach((element,index)=>{
            if(element===subtractionElem){
                 inputArray[index]=toReplace
            }

        })

        console.log(inputArray)
        
        
}

elementToReplace([1,2,1],3,1);

