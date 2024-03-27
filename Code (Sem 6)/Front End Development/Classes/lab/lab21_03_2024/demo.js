//pattern of phone number: 10 digits -> /d{10} of ^[0-9]{10}$
//pattern for email id fewChar@fewChar.fewChar [a-zA-z]+\@[a-zA-z]+\.[a-zA-z]
// + represents one or more  * represents zero or more
//first name ^[a-zA-z]{6,}$
//last name ^[a-zA-z]+$
//password ^[a-zA-z0-9]{6,}$

let inputString='809512312a'
console.log(inputString.match(/^[0-9]{10}$/)?true:false)

