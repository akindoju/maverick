import love from "../../Images/love.avif";
import life from "../../Images/life.webp";
import hoop from "../../Images/hoop.webp";
import "./Carousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/effect-fade/effect-fade.min.css";
import "swiper/modules/autoplay/autoplay.min.css";
import WOW from "wowjs";
import { useEffect } from "react";

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
      imageSubText: "Hatred for none",
    },
  ];

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <div className="carousel">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{
          delay: 5000,
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
                <div
                  className="carousel--text wow fadeInRight"
                  data-wow-delay="0.5s"
                >
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
