import React from "react";
import { useEffect, useState } from "react";

function BackToTopBtn() {
  const [backToTopBtn, setBackToTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopBtn(true)
      } else {
        setBackToTopBtn(false)
      }
    })
  }, [])


  return (
    <div>
      <button></button>
    </div>
  );
}
