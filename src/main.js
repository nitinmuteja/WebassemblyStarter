(async()=>{
const codePromise=fetch('../out/main.wasm')
const{ instance }= await WebAssembly.instantiateStreaming(codePromise)
const buffer=new Uint8Array(instance.exports.memory.buffer)
const pointer=instance.exports.helloWorld()
console.log(pointer)
console.log(buffer)
let string =""
for(let i=pointer;buffer[i];i++){
  string+=String.fromCharCode(buffer[i])
}
console.log(string)
 document.getElementById("container").textContent = string
})()

