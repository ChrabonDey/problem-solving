function Pattern(num1,num2){
    let start=""
       for(let i=0;i<num1;i++){
           for(let j=0;j<num2;j++){
                 if(i>0 && i<num1-1){
                     if(j===0){
                        start+="*"
                     }
                     else if( j===num2-2){
                        start+="*"
                     }
                     start+=" "
                 }
                  else{
                    start+="*"
                  }
                  
           }
           start+="\n"

       }
   return start;
}

function pattern1(num){
    let start=""
       for(let i=num ;i>=1;i--){
           for(j=1;j<=i;j++){
                start+="*" 
           }
           start+="\n"
       }
       return start;
}

console.log(pattern1(5))