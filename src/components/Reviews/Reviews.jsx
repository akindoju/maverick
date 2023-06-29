import { useEffect } from "react";
import WOW from "wowjs";
import "./Reviews.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/effect-fade/effect-fade.min.css";
import "swiper/modules/autoplay/autoplay.min.css";

const Reviews = () => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  const reviews = [
    {
      index: 1,
      name: "John Smith",
      company: "Pixel Perfect Studios",
      review:
        "I can't thank them enough! Their expertise and professionalism are unmatched. They delivered exceptional results on time and exceeded all our expectations. Highly recommended!",
    },
    {
      index: 2,
      name: "Emily Johnson",
      company: "Creative Minds Agency",
      review:
        "Wow, just wow! These guys know their stuff. The level of creativity and attention to detail in their work is incredible. They turned our vision into reality and made it even better. It's been a pleasure working with them!",
    },
    {
      index: 3,
      name: "Jake Thompson",
      company: "The Innovators",
      review:
        "This team is the real deal! They understood our brand perfectly and crafted a stunning design that captures its essence. Their communication was top-notch, and they were always there to address our questions and concerns. Couldn't be happier!",
    },
    {
      index: 4,
      name: "Sarah Williams",
      company: "TechGenius Ltd.",
      review:
        "These guys are simply awesome! They bring a fresh perspective and a touch of magic to every project. Their dedication and enthusiasm are infectious. Working with them was a breeze, and the results speak for themselves. Highly impressed!",
    },
  ];

  SwiperCore.use([Autoplay]);

  return (
    <div className="container">
      <div className="reviews">
        <h1 className="reviews__title wow fadeInDown">
          Been getting positive reviews
        </h1>
        <h4 className="reviews__sub-title wow fadeInLeft" data-wow-delay="0.5s">
          But don't just take my word for it
        </h4>

        <Swiper
          className="reviews__carousel"
          autoplay={{
            delay: 5000,

            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={1}
        >
          {reviews.map((review) => {
            return (
              <SwiperSlide key={review.name}>
                <p className="reviews__carousel--text">
                  “{review.review}” <br />
                  &mdash; {review.name}, {review.company}
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
