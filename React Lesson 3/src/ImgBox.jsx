import React, { useState } from "react";

// Import изображений
import first from "./assets/img/first.jpg";
import second from "./assets/img/second.jpg";
import third from "./assets/img/third.jpg";
import fourth from "./assets/img/fourth.jpg";
import fifth from "./assets/img/fifth.jpg";
import sixth from "./assets/img/sixth.jpg";
import seventh from "./assets/img/seventh.jpg";
import eighth from "./assets/img/eighth.jpg";
import ninth from "./assets/img/ninth.jpg";
import tenth from "./assets/img/tenth.jpg";


function ImgBox() {
  const images = [
    first, second, third, fourth, fifth,
    sixth, seventh, eighth, ninth, tenth
  ];

  const [index, setIndex] = useState(0);

  const prevImg = () => {
    setIndex((old) => (old === 0 ? images.length - 1 : old - 1));
  };

  const nextImg = () => {
    setIndex((old) => (old === images.length - 1 ? 0 : old + 1));
  };

  return (
    <div className="container" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      marginBottom: "-100px"
    }}>
      <div className="LandingImgBox" style={{
        position: "relative",
        width: "1200px",
        height: "500px",
        backgroundImage: `url(${images[index]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "10px"
      }}>

        <button 
          onClick={prevImg}
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.4)",
            color: "white",
            border: "none",
            padding: "12px 18px",
            cursor: "pointer",
            fontSize: "20px",
            borderRadius: "8px"
          }}
        >
          
          ‹
        </button>

        <button 
          onClick={nextImg}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.4)",
            color: "white",
            border: "none",
            padding: "12px 18px",
            cursor: "pointer",
            fontSize: "20px",
            borderRadius: "8px"
          }}
        >
          ›
        </button>

      </div>
    </div>
  );
}

export default ImgBox;
