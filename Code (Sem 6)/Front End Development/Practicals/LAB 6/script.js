let f1=0;
let f2=1;
let input_Number=document.getElementById("inputNumber").ariaValueMax;
console.log(f1,f2);
/*while(f1+f2<input_Number)
{
    let temp=f1+f2;
    console.log(temp);
    f1=f2;
    f2=temp
}*/
function genfib()
{
    let f1=0;
    let f2=1;
    let input_Number=document.getElementById("inputNumber").value;
    let resultvalue = " ";
    let result = document.getElementById("result");
    resultvalue = resultvalue + f1 + " " + f2;
    //console.log(f1,f2);
    function genz(f1,f2,input_Number)
    {
       if(f1+f2>=input_Number){
        return;
       }
       resultvalue = resultvalue + " " + (f1 + f2);
       //console.log(f1+f2);
       genz(f2,f1+f2,input_Number);
    }
    result.innerHTML = resultvalue;
    genz(f1,f2,input_Number)
}
/*
function pentg(){
    let resultvalue="";
    console.log(f1,f2);
    resultvalue=resultvalue+f1+""+f2;
    genfib(f2,f1,input_Number);
}
*/