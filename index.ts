let course:string='next Level Web development';

/*
  Primitive Types:
   1.string
   2.number
   3.boolean
   4.null
   5.undefined
   6.symbol
   7.bigint

   Non-Primitive Types:
   1.object
   2.array
   3.tuple
   4.enum

   */

let isAdmin:boolean=true
let x:undefined=undefined
let y:null=null

let sym:symbol=Symbol("mySymbol")
   //symbol is unique and immutable data type where  each symbol value is unique. it works as identifier for object properties when we call Symbol() that means every time we call 
console.log(typeof undefined)
console.log(typeof null) //output object
console.log(typeof sym) //output symbol

//Array
let friends: string[] = ["Alice", "Bob", "Charlie"];

let eligibleAge: number[]=[18,19,20,21]

//tuple-->array-->type of values

let coordinates=[1,"Mir"]

let sum=['Mr y',...coordinates];// output: ['Mr y',1,"Mir"]
//object ,Optional And Literal Types
let user:{id:number,name:string,age?:number}={
    id:1,
    name:"Chrabon",

}

//function
 
function add(num1:number,num2:number):number{
     return num1+num2;
}
add(5,10)

let Usu = {
  id: 345,
  name: {
    firstname: "Chrabon",
    lastName: "Sarker"
  },
  contactNo: "123-456-7890",
  address: "Uganda"
};

let { name: { firstname }, address } = Usu;

console.log(firstname); // 👉 "Chrabon"
console.log(address);  

 type student={
     id:number,
     name:string,
     address?:string,
     isGraduated:boolean
 }

 const student1:student={
         id:1,
         name:"Chrabon",
         isGraduated:true
 }

 type frontenddev='React'|'Angular'| 'Vue';

 const newDeveloper:frontenddev='React';

//Type assertion bangla meaning of assertion is "দাবি"  or "বক্তব্য"

{
   //when i use as than it is called type assertion
  let anything: any;
  anything="Hello WOrld";
  (anything as string).length;

  const kgToGm= (Value:string | number): string | number | undefined=>{
    if(typeof Value ==='string'){
      const convertValue=parseFloat(Value);
      return convertValue;
    }
    if(typeof Value ==='number'){
       return Value*1000;
    }

  }
    console.log(kgToGm(5))
}

{
  //  Interface
    //this is type declaration
    type  person={
      name: string,
      age:number,
       address?:string
    }


    //now interfact

    interface Employee{
       name: string,
       age:number
    }

    // difference between type and interface is that interface can not hold primitive type but type can hold primitive type . Second is that interface can be extends but type can not  be extends
     type UserWithRole=person & {role:string} // this is called intersection type
    
    const user1:UserWithRole={
        name:"Chrabon",
        age:22,
        role:"Admin"
    }

    interface EmployeeWithRole extends Employee{
        role:string
    }

    //js--> object, array-->object function-->object
      
    type roleNumber=number[];
    const rollNumber1:roleNumber=[1,2,3,4,5]

    interface RoleNumberArray{
       [index:number]:number
    }

    type Add=(num1:number,num2:number)=>number;
    interface AddFunction{
        (num1:number,num2:number):number
    }

    //Amra array ar function er khetre type allias use kora better ar object er khetre interface use kora better



}

{
  //Generic Types

  // const rollNumber :number[]=[1,2,3,4,5];

  type rollNumber<T>=Array<T>
  const rollNumber:rollNumber<number>=[1,3,4,5,5]


  const stringArray :string[]=["a","b","c"];
   const booleanArray:boolean[]=[true,false];
 //Generic Tuple

 type GenericTuple<X,y>=[X,y]
 const manus:GenericTuple<string,number>=["Chrabon",22];

   


}


{
  interface Person<T>{
     name:string,
     age:number,
     data:T
  }


  const person1:Person<{hobbies:string[],role:string,isMarried:boolean}>={
       name:"Chrabon",
       age:22,
       data:{
          hobbies:["reading","coding"],
          role:"Admin",
          isMarried:false
       }
  }


}

interface BankAccountDetails<T>{
   AccountNumber:number,
   balance:number,
   name:string,
   details:T
}

const bankAccount1:BankAccountDetails<{branch:string,IFSCcode:string}>={
    AccountNumber:123456789,
    balance:5000,
    name:"Chrabon Sarker",
    details:{
      branch:"Main Branch",
      IFSCcode:"ABCD0123456"
    }
}

{
  const createArrray=(T:string):string[]=>{
    return [T];
  }

  const result=createArrray('Bangladesh')

}




