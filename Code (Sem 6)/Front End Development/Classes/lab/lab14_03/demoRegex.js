let inputString='Hi, I am pavan, you can call me 8095123123 and pavan@gmail.123'
let phoneNumberRe=/[0-9]{10}/
let emailReg=/[a-z]+\@[a-z]+\.[a-z]/
if(inputString.match(emailReg))
{
    console.log("matched")
}
else{
    console.log("not Matched")
}
// console.log(inputString.matchAll(phoneNumberRe))