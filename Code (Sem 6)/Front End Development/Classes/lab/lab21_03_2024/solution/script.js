let validate=(inputString,regex)=>inputString.match(regex)?true:false
let isEmpty=(inputString)=>inputString.length==0?true:false
let regexCollection={
    firstName:/^[a-zA-z]{6,}$/,
    lastName:/^[a-zA-z]+$/,
    email:/[a-zA-z]+\@[a-zA-z]+\.[a-zA-z]/,
    phoneNumber:/^[0-9]{10}$/,
    password:/^[a-zA-z0-9]{6,}$/,
    address:/[a-zA-z0-9]+/
}
let firstName=document.getElementById('firstName')

firstName.addEventListener('change',()=>{
    if(isEmpty(firstName.value))alert('first Name is empty')
    if(!validate(firstName.value,regexCollection.firstName))alert('first Name is invalid')
}
)

// document.getElementById('registerBtn').addEventListener('click',()=>{
//     let formFields=document.querySelectorAll('.validation-required')
//     Array.prototype.slice.call(formFields).forEach(field=>{
//         field.addEventListener('change',()=>
//         {
//             if(isEmpty(field.value))
//                 alert(`${field.getAttribte('name')}is empty`)
//             if(!validate(field.value))
//                 alert(`${field.value} is not valid`)
//             field.focus()
//         }) 
//     })

// })