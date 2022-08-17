import React, { useEffect, useState } from "react"
import Photos from "./Photos"
import './photolist.css'
const PhotoList = () => {
  const [photo, setPhoto] = useState([])
  
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos")
    const data = await response.json()
    setPhoto(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
 
  return (
    <div>
      {photo.length > 0 && (
        <div className="photolist">
          {photo.map(images => (
            <Photos key={images.id} sourcepath={images.thumbnailUrl} images={images}  />
          ))}
        </div>
      )}
    </div>
  )
}

export default PhotoList