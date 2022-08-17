import React, {useState, useEffect} from 'react'
import './modelwindow.css'
function ModelWindow(props) {
    const modelcontent=props.modlecontentimage
    
     
  return (
    <div className='modelwindow'>
        <div className='modelwindowcontent'>
                <img src={modelcontent.url} className='imgbig' />
                <p>{modelcontent.title}</p>
            <span onClick={props.onclick} className='close'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAABqElEQVRYhe3Yq47CQBiG4RcSFAgUBtVb4FYwIODmKghiAjeAwHIDKFoBCYEKFKZNmFXskj0wp3/2lH6uyUznEe3M1za01po/lOZPA1xTg2OnBsdODY4dK/B2u6WqqqiQw+FgtYYRvF6vWS6XKKWiobMsI01TqzWM4OPxCECe51HQWZYxn88BKIqC6/X6dLwRPBwOSZIEkEc/YjudDpPJhG63+3SOEdxqtaKgfbBWYJBH+2KtwSCHDsE6gSEcHYp1BoM/WgLrBQZ3tBTWGwz2aElsEBjMaGksQEPim66qKpRS5HkOQJIkDAYDlFKiWBACw0f0PZJYEKyX98ej1+u93bzZZDQaiWFBuA/v93vO5/Pr9e12Y7VaiRYmMfDjC9Zut+n3+4B8YRIBv98NptMp4/E4SssLBn+1dcVqeUFg0z4bA+0Ntj0UpNFeYNcTTBLtDPY9bqXQTuDQbiCBtgZLFZlQtBVYunWFoI3gGBUR/NFG8GazEcfe8xn6dDo9n6QNKctSLxYLfblcTEO9U5alns1merfbGceK9eHvyv/83fqbUoNjpwbHzgt2Kkhd3aBqAQAAAABJRU5ErkJggoI=" alt="" /></span>
        </div>
    </div>
  )
}

export default ModelWindow