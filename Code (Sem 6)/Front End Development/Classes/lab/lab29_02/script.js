let canvas=document.getElementById("myCanvas")
let ctx=canvas.getContext("2d")
let isDrawing=false

function startDrawing(event)
{
    isDrawing=true
    ctx.beginPath()
    let x=event.offsetX
    let y=event.offsetY
    ctx.moveTo(x,y)
    event.preventDefault()

}
function drawing(event)
{
    if(isDrawing)
    {
        let x=event.offsetX
        let y=event.offsetY
        ctx.lineTo(x,y)
        ctx.stroke()
        event.preventDefault()
    }

}
function stopDrawing(event)
{
    isDrawing=false
    event.preventDefault()

}