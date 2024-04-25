var myRequest=new XMLHttpRequest()
myRequest.onreadystatechange=()=>{
    if(myRequest.readyState==4){
        document.getElementById('ajax-content').innerHTML=myRequest.responseText
    }
}
function getTheWish(){
    myRequest.open('GET',surprise.html)
    myRequest.send()
    document.getElementById('reveal').style.display='None'
}