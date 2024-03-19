document.getElementById('click').addEventListener("click")Code

let xhr = new XMLHttpRequest()
xhr.open('Get','../Code (Sem 6)/Front End Development/Classes/Class 2/script.js',true)
xhr.onload=()=>
{
    console.log(xhr.response.Text)
    document.getElementById('result').innerHTML = xhr.responseText();
}
xhr.responseText
xhr.send()
