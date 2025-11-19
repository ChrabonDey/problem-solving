const emiter=require('node:events');

class myEmitter extends emiter{

}

const MyEmitter=new myEmitter();

MyEmitter.on('ring',()=>{
    console.log('ah event occurred')
})

MyEmitter.emit('ring')