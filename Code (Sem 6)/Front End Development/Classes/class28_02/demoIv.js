function readData()
{
    var college=document.getElementById("college").innerHTML
    var dept=document.getElementById("dept").value
    console.log(college,dept)
    var  collegeStyle=document.getElementById("college")
    collegeStyle.style.color="red"    
    window.alert(dept)
    let res=confirm("are you from banglore")
    console.log(res)
}