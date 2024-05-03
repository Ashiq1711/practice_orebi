import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Image from "./Image";

function Banner() {
  let [active,setActive]=useState(0)
  var settings = {
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, responsive: [
      
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          customPaging: (i) => (
            <div
              style={
                i === active
                  ? ( {
                      width: "30px",
                      color: "#262626",
                      padding: "4px",
                      borderRight: "2px #262626 solid",
                    })
                  : ( {
                    width: "20px",
                    color: "#ffff",
                    padding: "4px",
                    borderRight: "0px",
                  })
              }
            >
              0{i + 1}
            </div>
          ),
          appendDots: (dots) => (
            <div
         
            >
              <ul
                style={{
                  margin: "0px",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: "2%",
                  fontSize:'12px',
                }}
              >
                {" "}
                {dots}{" "}
              </ul>
            </div>
          ),
        }
      },
      
    ],
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "transparent",
        }}
      >
        <ul
          style={{
            margin: "0px",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: "9%",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    beforeChange: (prev, next) => {
      setActive(next);
    },
    customPaging: (i) => (
      <div
        style={
          i === active
            ? ( {
                width: "30px",
                color: "#262626",
                padding: "5px",
                borderRight: "2px #262626 solid",
              })
            : ( {
              width: "30px",
              color: "#ffff",
              padding: "5px",
              borderRight: "0px",
            })
        }
      >
        0{i + 1}
      </div>
    ),
  };
  return (
    <Slider {...settings}>
      
        <Image className=' w-full' src="banner.png" alt="banner" />
      
        <Image className=' w-full' src="banner.png" alt="banner" />
    
    
        <Image className=' w-full' src="banner.png" alt="banner" />

    </Slider>
    
  );
}

export default Banner;
