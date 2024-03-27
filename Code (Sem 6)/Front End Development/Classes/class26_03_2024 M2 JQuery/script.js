 //document.getElementById('manupulate').style.display="none"
// document.getElementById('show').addEventListener('click',()=>{
//     document.getElementById('manupulate').style.display="block"
// })

$('document').ready(function(){
    $('button#hideBtn').click(()=>$('p#one').hide(2000,()=>console.log('content is hidded')))
    $('button#showBtn').click(()=>$('p#one').show())
    $('button#toggleBtn').click(()=>$('p#two').toggle())
    // $('button#fadeToBtn').click(()=>$('p#three').fadeTo("slow",0.5))
    $('button#fadeToBtn').click(()=>{
        $('p#three').addClass('c1')
        $('p#one').removeClass('c1')

    })

    //console.log(document.getElementById('one').innerHTML)
    $('#one').html("hello im changed ")
    console.log($('#one').html())
})
