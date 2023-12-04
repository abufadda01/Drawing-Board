import React, { useEffect, useState } from 'react'
import {useOnDraw} from '../hooks/UseOnDraw'
import "./canvas.css"

const Canvas = ({width , height , color}) => {

    const setCanvasRef = useOnDraw(onDraw , color)
    
    const [DefaultColor , setDefaultColor] = useState()
    
    useEffect(() => {
      setDefaultColor(color)
    } , [])


    function onDraw(ctx , point , DefaultColor , prevPoint){
      drawLine(prevPoint , point , ctx , DefaultColor , 5)
    }

    function drawLine(start , end , ctx , color , width){

      start = start ? start : end

      ctx.beginPath()
      ctx.lineWidth = width
      ctx.strokeStyle = color
      ctx.moveTo(start.x , start.y)
      ctx.lineTo(end.x , end.y)
      ctx.stroke()

      start = 0

    }


  return (
    <canvas  width={width} height={height} className='canvas' ref={setCanvasRef} />
  )
}

export default Canvas

      // const {x , y} = point
      // console.log(x , y)
      // ctx.fillStyle = DefaultColor 
      // ctx.beginPath()
      // // ctx.drawLine(x , y)
      // // ctx.moveTo(window.scrollX - x , window.screenY - y)
      // // ctx.lineTo(x , y)
      // // ctx.arc(x , y , 2 , 0 , 2 * Math.PI)
      // ctx.stroke()
      // ctx.strokeStyle = DefaultColor