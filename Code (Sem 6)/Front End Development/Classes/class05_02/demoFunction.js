//function function_name(parmerter1.parameter2){logic}
function addV0(operand1,operand2)
{
    return operand1+operand2
}
let additionResult=addV0(10,10)
console.log(additionResult)

let addV1=function(operand1,operand2){
    return operand1+operand2
}

console.log(addV1(100,100))

let addV2=(operand1,operand2)=>{
    return operand1+operand2
}

console.log(addV2(1000,1000))

let addV3=(operand1,operand2)=>operand1+operand2
console.log(addV3(10000,10000))

console.log(()=>"i am an anoumyous function in java script")