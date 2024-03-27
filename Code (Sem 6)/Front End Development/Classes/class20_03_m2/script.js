document.getElementById('submit').addEventListener('click',()=>{

    //1. create a XMLHTTPRequest Object 
    let xhr=new XMLHttpRequest()

    //2.configure the request
    xhr.open('GET','https://reqres.in/api/users?page=2',true)

    xhr.onload=()=>{
        console.log(typeof xhr.responseText)

    }
    //xhr.responseType=JSON
    xhr.send()

})