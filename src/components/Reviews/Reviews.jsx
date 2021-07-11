import { useEffect } from "react";
import { useState } from "react";
import "./Reviews.scss";

const Reviews = () => {
  const [isFirstText, setIsFirstText] = useState(false);

  useEffect(() => {
    const setText = () => {
      setIsFirstText(true);

      setTimeout(() => {
        setIsFirstText(false);
      }, 4000);
    };

    setText();

    setInterval(() => {
      setText();
    }, 8000);
  }, []);

  return (
    <div className="reviewsContainer">
      <h1 className="reviews__title">Been getting positive reviews</h1>
      <h4 className="reviews__sub-title">But don't just take my word for it</h4>

      {isFirstText ? (
        <p className="reviews__text">
          “I don’t like people, but I make an exception for Akindoju Agency.
          He's pretty cool.” <br />
          &mdash; Shayo Oyahs, Akindoju Corporation
        </p>
      ) : (
        <p className="reviews__text">
          Akindoju Agency is the best. Not only did he deliver my work on time,
          they even walked my dog when I was out of town.”
          <br />
          &mdash; George, A Neighbour
        </p>
      )}
    </div>
  );
};

export default Reviews;
