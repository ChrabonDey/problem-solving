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

const data=[{id:1,name:"Om Dey Sarker",address:"Rayphara"}]

// console.log(data.address)


const product={
   count:5000,
   data:[
      {id:1,name:"Om Dey Sarker",address:"Rayphara",price:50000},
      {id:2,name:"Chrabon Dey Sarker",address:"Rayphara" ,price:60000}
   ]
}
// console.log(product.data[1].price)

const user={
   id:5,
   name:"Chumbu",
   address:{
      street:{
         first:"54/1 uttor side",
         second:"poribag er goli",
         third:"no dorai"
      },
      city:'Dhaka'
   }
}
// console.log(user.address.street.third)

const numbers=[4,3,2,5,6,7]

const result=numbers.filter(item=>{
   if(item>3){
      return item*3

   }
   else{
       return item;
   }
})
// console.log(result)

const result1=numbers.filter(item=>item>3)
// console.log(result1)

const total=numbers.reduce((previous,current)=>previous+current,0)


const oddArray=[1,3,5,7,9]
const array=[33,50,79,78,90,101,30]
let evenArray=[]

for(let num of oddArray){
       evenArray.push(num+1)
}
const even=oddArray.map(item=>item+1)
// console.log(even)

const divisable=array.filter(item=>item%10===0)

// console.log(divisable)

function kitchen(){
   let roast =0;
 
   return function (){ 
       roast++;
      console.log(roast)    
   }
   
   
}
// kitchen()
function greeting(greetingHandler,name){
    greetingHandler(name);
}
function greetingHandler(name){
    console.log(name)
}

greeting(greetingHandler,'heelo')










