function maximumWealth(accounts){
    let sum=0;
    let rich=[];
  
   for(let i=0;i<accounts.length;i++){
          for(let b=0;b<accounts.length;b++){
                sum+=accounts[i][b]
          }
          rich[i]=sum;
          sum=0;
   }
   for(let r=0;r<rich.length;r++){
       if(rich[0]<rich[r]){
         rich[0]=rich[r]
       }
   }

   return rich[0]
   
     
}

console.log(maximumWealth([[1,2,3],[2,3,4],[4,5,6]]))