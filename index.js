// index.js

//  import the crypto module

const crypto=require('crypto');

//  get a commands using process.argv
const {sum,sub,divide,multiply,sin,cos,tan,random}=require("./data")

const store=process.argv
const command=store[2]
const arg1=+store[3]
const arg2=+store[4]

// complete the  function

if(command=="sum"){
  console.log(sum(arg1,arg2))
}
if(command=="sub"){
  console.log(sub(arg1,arg2))
}
if(command=="divide"){
  console.log(divide(arg1,arg2))
}
if(command=="multiply"){
  console.log(multiply(arg1,arg2))
}
if(command=="sin"){
  console.log(sin(arg1))
}
if(command=="cos"){
  console.log(cos(arg1))
}
if(command=="tan"){
  console.log(tan(arg1))
}
if(command=="random"){
  console.log(random(arg1))
}



