const path = require("path");
const fs=require('fs')

console.log(process.argv[3]) /*output:'C:\\Program Files\\nodejs\\node.exe',
  'E:\\JS-Provlem-solving\\logger.js'*/

const data=process.argv;
const [a,b, ...c]=data;

const text=c.join(' ')
const filePath=path.join(__dirname,'log.txt')
 
fs.appendFile(filePath,text,{encoding:'utf-8'},()=>{
    console.log("your file append is successfully")
})
console.log(filePath)

