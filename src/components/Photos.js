import React, { useState } from 'react'
import ModelWindow from './ModelWindow'
function Photos(props) {
    const [item, setItem]= useState(null)
    const [showPopup,setShowPopup]= useState(false)

    const showcolor= (data)=>{
        //console.log(data)
        setShowPopup(true)
        setItem(data)    
       
    }
    const reset = ()=>{
        setShowPopup(false)
        setItem(null)
    }
  return (
    <>
    <div><img src={props.sourcepath}  onClick={()=>showcolor(props.images)}/></div>
    {
        showPopup &&(
            <ModelWindow modlecontentimage={item} onclick={reset}/> 
        )
    }
    </>
  )
}

export default Photos