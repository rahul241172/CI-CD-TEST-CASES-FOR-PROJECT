const sum=(a,b)=>{
    return (a+b)
}
const sub=(a,b)=>{
    return (a-b)
}
const divide=(a,b)=>{
    return (a/b)
}
const multiply=(a,b)=>{
    return (a*b)
}
const sin=(a)=>{
    return (Math.sin(a))
}
const cos=(a)=>{
    return (Math.cos(a))
}
const tan=(a)=>{
    return (Math.tan(a))
}
const random=(a)=>{
    const random_num=require("crypto")
    return random_num.randomInt(a)
}
module.exports={sum,sub,divide,multiply,sin,cos,tan,random}
