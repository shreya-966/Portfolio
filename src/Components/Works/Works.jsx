import { useState } from 'react';
import './works.scss'

const Works = () => {
  const handleclick = (way)=>{
    way === "left" ?  setcurrentslide(currentslide > 0? currentslide-1 : 2) : setcurrentslide(currentslide < data.length - 1 ? currentslide + 1 : 0);
  }
  const [currentslide , setcurrentslide] = useState(0)
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Weather App",
      desc:
        "Get to know about the climatic condition of any place .",
      img:
        "./assets/weather.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "E-Commerce App",
      desc:
        "A completely responsive E-commerce website displaying the features of the website.",
      img:
        "./assets/ecom.png",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Gaming",
      desc:
        "Gaming is now more fun by this clone of the chrome dinosaur game by with a slight change in the theme by me.",
      img:
        "./assets/game.png",
    },
  ];
  return (
    <>
      <div className="works" id='works'>
        <div className="slider" style={{transform: `translateX(-${currentslide * 100}vw)`}}>
          {data.map((d)=>{
            return(
              <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftcontainer">
                  <div className="imgcontainer">
                    <img src={d.icon} alt="nbdvj" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc} </p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="bcdjk" />
              </div>
            </div>
          </div>
            )
          })}
        </div>
        <img src="assets/arrow.png" className="arrow left" alt="arrow" onClick={()=>handleclick("left")}/>
        <img src="assets/arrow.png" className="arrow right" alt="arrow" onClick={()=>handleclick()}/>
      </div>
    </>
  )
}

export default Works;
