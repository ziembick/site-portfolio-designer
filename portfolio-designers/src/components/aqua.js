import React, { useState, useEffect} from "react";
import aqua1 from "../img/aqua1.png";
import Navbar from "./navbar";
import "../css/ponto.css";

function Aqua() {
  const [images, setImages] = useState([])


useEffect(() => {
  async function loadImages () {
    const images = []
    const files = [
      { name: "aqua2.png", alt:"Acqua Lounge"},
      { name: "aqua3.png", alt:"Acqua Lounge"},
      { name: "aqua4.png", alt:"Acqua Lounge"},
      { name: "aqua5.png", alt:"Acqua Lounge"},
      { name: "aqua6.png", alt:"Acqua Lounge"},

    ]
    for (const file of files) {
      const module = await import (`../img/${file.name}`)
      images.push({...file, src: module.default})
    }
    setImages(images)
  }
  loadImages()
},[])

  return (
    <div>
      <h1>OI</h1>
    </div>
  );
}

export default Aqua;
