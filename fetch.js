let btn=document.getElementById('btn');

let main=document.getElementById('main');
btn.addEventListener('click',()=>{
    console.log('hello')  
fetch('https://jsonplaceholder.typicode.com/comments')
.then(res=>res.json())
.then(data=>
{
   

    data.forEach(item=>{
         const para=document.createElement('p');
        const name=item.name;
        para.innerHTML=`${name}`
        para.style.borderWidth='2px'
    para.style.borderStyle="solid"
    para.style.borderColor="red"
    para.style.borderRadius='5px'
    para.style.padding='20px'
    
   
    main.appendChild(para)
    })
    
}
)
.catch(error=>console.log(error))

})
