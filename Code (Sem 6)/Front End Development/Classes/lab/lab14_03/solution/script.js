let fnameObject=document.getElementById('fname')
let dobObject=document.getElementById('dob')
let emailGroupObject=document.getElementById('email-group')
let websiteGroupObject=document.getElementById('web-group')
let eidGroupObject=document.getElementById('eid-group')

//disapper the email, web,eid

emailGroupObject.style.display='none'
websiteGroupObject.style.display='none'
eidGroupObject.style.display='none'

let calculateAge=(dob=>{
    //1:extract todays date
    let todaysDate=new Date() //14-03-2024
    let dateofBirth=new Date(dob) //10-09-2003 - sumanth
    let age=todaysDate.getFullYear()-dateofBirth.getFullYear()//2024-2003
    age=todaysDate.getMonth()-dateofBirth.getMonth()<0?--age:age //03-09<0?20:21
    return age
})

document.getElementById('dob').addEventListener("change",()=>{
    let age=calculateAge(document.getElementById('dob').value)
    if(age<18)
    {
        emailGroupObject.style.display='none'
        websiteGroupObject.style.display='none'
        eidGroupObject.style.display='none'
    }
    else if(age>=18 && age<25)
    {
        emailGroupObject.style.display='block'
        websiteGroupObject.style.display='block'
        eidGroupObject.style.display='none'
    }
    else{
        emailGroupObject.style.display='block'
        websiteGroupObject.style.display='block'
        eidGroupObject.style.display='block'
    }
})
// let displayFields=()=>{
//     let age=calculateAge(document.getElementById('dob').value)
//     if(age<18)
//     {
//         emailGroupObject.style.display='none'
//         websiteGroupObject.style.display='none'
//         eidGroupObject.style.display='none'
//     }
//     else if(age>=18 && age<25)
//     {
//         emailGroupObject.style.display='block'
//         websiteGroupObject.style.display='block'
//         eidGroupObject.style.display='none'
//     }
//     else{
//         emailGroupObject.style.display='block'
//         websiteGroupObject.style.display='block'
//         eidGroupObject.style.display='block'
//     }
// }

document.getElementById('submit').addEventListener("click",()=>{
    document.write(`hi ${fnameObject.value} well come` )
})