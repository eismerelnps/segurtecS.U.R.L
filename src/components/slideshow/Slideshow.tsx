"use client";
import { useEffect, useState } from "react";

import Image from "next/image";

//Slideshow Images
import cabledivisor from "/public/ads/cabledivisor.jpg";
import fisheye from "/public/ads/fisheye.jpg";
import generador from "/public/ads/generador.jpg";
import glandulas from "/public/ads/glandulas.jpg";
import probadores from "/public/ads/probadores.jpg";
import securehome from "/public/ads/secureHome.jpg";
import spy from "/public/ads/spy.jpg";


import { useRouter } from "next/navigation";



const slides = [
  {
    image: cabledivisor,
    alt: "",
  },
  {
    image: fisheye,
    alt: "",
  },
  {
    image: generador,
    alt: "",
  },
  {
    image: glandulas,
    alt: "",
  },
  {
    image: probadores,
    alt: "",
  },
  {
    image: securehome,
    alt: "",
  },
  {
    image: spy,
    alt: "",
  },
];

const Slideshow = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  const handlePrevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handleToMenu = () => {
    router.push('/menu')
  }
  return (
    <div

      className={`slideshow mt-1 relative overflow-hidden w-full h-[80px] xs:h-[110px] 400:h-[120px] sm:h-[230px] md:h-[240px] lg:h-[280px] xl:h-[380px]`}
    >
      {slides.map(({ image, alt }, i) => (
        <Image
          className={`animate__animated  absolute top-0 left-0 object-cover delay-700 w-full h-auto   
          ${index === i ? " animate__fadeInRight z-[1]  " : " opacity-0"
            }  `}
          width={1200}
          height={450}
          key={i}
          src={image}
          alt={alt}
        />
      ))}

      <div className=" absolute bottom-0 left-0 right-0  opacity-60 text-white  text-center z-[2]">
        {/* If you want to add caption to photos use this slot */}
        {slides.map((slide, i) => (
          <span
            key={i}
            className={`z-20  cursor-pointer  mx-0.5 h-3 w-3 rounded-full inline-block transition duration-600 ease  hover:bg-white ${index === i
                ? "bg-slate-50 opacity-90  "
                : " bg-slate-400 opacity-60"
              }`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>

      <nav
        className=" absolute cursor-pointer top-1/2 w-auto  mt-[-22px] p-2 sm:p-4 text-white font-bold text-lg transition duration-600 ease rounded-tr rounded-br  select-none  hover:bg-slate-950 hover:opacity-40 hover:text-white z-[2]"
        onClick={handlePrevSlide}
      >
        &#10094;
      </nav>
      <nav
        className="absolute cursor-pointer top-1/2 right-0 w-auto  mt-[-22px] p-2 sm:p-4 text-white font-bold text-lg transition duration-600 ease rounded-tl rounded-bl  select-none  hover:bg-slate-950 hover:opacity-40 hover:text-white z-[2]"
        onClick={handleNextSlide}
      >
        &#10095;
      </nav>
    </div>
  );
};

// SlideshowADS.propTypes = {
//   slides: PropTypes.arrayOf(
//     PropTypes.shape({
//       image: PropTypes.string.isRequired,
//       caption: PropTypes.string.isRequired,
//       description: PropTypes.string,
//       alt: PropTypes.string,
//     })
//   ).isRequired,
//   interval: PropTypes.number,
//   transition: PropTypes.string,
//   captionPosition: PropTypes.oneOf(["top", "bottom"]),
//   // width: PropTypes.string,
//   // height: PropTypes.string,
//   alt: PropTypes.string,
//   onError: PropTypes.func,
// };

// SlideshowADS.defaultProps = {
//   interval: 3000,
//   transition: "opacity 1s ease-in-out",
//   captionPosition: "bottom",
//   width: "100%",
//   height: "500px",
//   onError: () => {},
// };

export default Slideshow;
