import love from "../../Images/love.avif";
import life from "../../Images/life.webp";
import hoop from "../../Images/hoop.webp";
import "./Carousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/effect-fade/effect-fade.min.css";
import "swiper/modules/autoplay/autoplay.min.css";

const Carousel = () => {
  const carouselData = [
    {
      image: hoop,
      alt: "basketball hoop",
      imageTextOne: "Shoot for",
      imageTextTwo: "the hoop!",
      imageSubText: "Aiming low is not an option.",
    },

    {
      image: life,
      alt: "mountains",
      imageTextOne: "The meaning",
      imageTextTwo: "of life?",
      imageSubText: "to give life meaning.",
    },

    {
      image: love,
      alt: "Silohuette of friends",
      imageTextOne: "Love for all.",
      imageTextTwo: "Hatred for none",
    },
  ];

  return (
    // <div className="carousel">
    //   {carouselData.map((slide, index) => {
    //     return (
    //       <div
    //         className={index === currentCount ? "slide active" : "slide"}
    //         key={index}
    //       >
    //         {index === currentCount && (
    //           <div>
    //             <img
    //               src={slide.image}
    //               alt={slide.alt}
    //               className="header__slider--image"
    //             />
    //             <div className="header__slider--text">
    //               <h1 className="header__slider--text--main">
    //                 {slide.imageTextOne} <br /> {slide.imageTextTwo}
    //               </h1>
    //               <h4 className="header__slider--text--sub">
    //                 {slide.imageSubText}
    //               </h4>
    //             </div>
    //           </div>
    //         )}
    //       </div>
    //     );
    //   })}
    // </div>

    <div className="carousel">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
      >
        {carouselData.map((slide) => {
          return (
            <SwiperSlide>
              <div key={slide.image}>
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="carousel--image"
                />
                <div className="carousel--text">
                  <h1 className="carousel--text-main">
                    {slide.imageTextOne} <br /> {slide.imageTextTwo}
                  </h1>
                  <h4 className="carousel--text-sub">{slide.imageSubText}</h4>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
