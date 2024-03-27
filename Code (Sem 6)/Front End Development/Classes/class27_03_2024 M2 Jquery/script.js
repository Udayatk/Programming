$('document').ready(()=>{
    
    $('button#changeBtn').click(()=>{
        $('p.h').fadeOut().addClass('hh')
        let myColor=$('div#myDiv1').css("background-color")
        // $('div#myDiv1').css("background-color",(myColor)=>{
        //     console.log(myColor)
        // })
       // console.log($('div#myDiv1').css("background-color"))
        if(myColor=='rgb(0, 0, 255)')
        {
            $('div#myDiv1').css("background-color","red")
            $('div#myDiv1').css("width",500)
        }
        else
        {
            $('div#myDiv1').css("background-color","blue")
        }
    })

    $('div#myDiv1').on('click',()=>
    {
        $('div#myDiv1').css("background-color","yellow")
    }
    ,()=>{
        $('div#myDiv1').css("background-color","purple")
    })
})