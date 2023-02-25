import React, { useEffect, useState } from "react";
import Navbar from "./navbar";

function Tucafe() {
  const [images, setImages] = useState();

  useEffect(() => {
    async function loadImages(){
      const images =[]
      const files = [
        {name: "tucacafe1.png", alt: "Tuca Cafe"},
        {name: "tuca-cafe-2.gif", alt: "Tuca Cafe 2"},
        {name: "tuca-cafe-3.gif", alt: "Tuca Cafe 3"},
        {name: "tuca-cafe-4.gif", alt: "Tuca Cafe 4"},
        {name: "tuca-cafe-5.gif", alt: "Tuca Cafe 5"},
        {name: "tuca-cafe-6.gif", alt: "Tuca Cafe 6"},
        {name: "tuca-cafe-7.gif", alt: "Tuca Cafe 7"},
        {name: "tuca-cafe-8.gif", alt: "Tuca Cafe 8"},
      ]
      for(const file of files) {
        const module = await import (`../img/${file.name}`)
        images.push({...file, src: module.default})
      }
      setImages(images)
    }
    loadImages()
  },[])



  return (
    <>
    <Navbar />
    <div>
    {images.map((image, index) => (
      <img key={index} src={image.src} alt={image.alt} className={image.className}/>
    ))}
    </div>
    </>
  );
}

export default Tucafe;
