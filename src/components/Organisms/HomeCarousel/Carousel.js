import React, { useEffect, useState } from "react";
import "./Carousel.scss";
import Icon from "../../atoms/Icon/Icon";
import bannerImages from "../../../../server/banners/index.get.json";
export default function Carousel() {
  const [current, setCurrent] = useState(1);
  const [touchPosition, setTouchPosition] = useState(null);
  const length = bannerImages.length;

  //To automatically change banners 
  useEffect(() =>{
    let bannerInterval = setInterval(handleSlide(current === 1 ? length : current - 1), 4000);
    return(() => {
        clearInterval(bannerInterval);
    })
  },[]);
  const handleSlide = (slideOrder) => {
    setCurrent(slideOrder);
  };
  //Captures finger touch
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  //Captures finger swipe move
  const handleTouchMove = (e) => {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }
    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
    if (diff > 10) {
      handleSlide(current === length ? 1 : current + 1);
    }
    if (diff < -10) {
      handleSlide(current === 1 ? length : current - 1);
    }
    setTouchPosition(null);
  };
  return (
    <section className="carousel">
      <div className="carousel__container">
        {bannerImages.map((data) => (
          <div
            key={data.id}
            className={
              data.order === current ? "carousel__container__slide active": "carousel__container__slide"
            }
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}>
            {data.order === current && (
              <Icon
                source={data.bannerImageUrl}
                alt={data.bannerImageAlt}
                reqclass={`carousel__container__slide__image`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="carousel__nav">
        {bannerImages.map((data) => (
          <button
            key={data.id}
            className="carousel__nav__dots"
            onClick={() => handleSlide(data.order)}
            aria-label={data.bannerImageAlt}
          ></button>
        ))}
      </div>
    </section>
  );
}
