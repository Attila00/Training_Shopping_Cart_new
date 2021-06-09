import React, { useEffect, useState } from "react";
import "./Carousel.scss";
import Icon from "../../atoms/Icon/Icon";
import bannerImages from "../../../../server/banners/index.get.json";
export default function Carousel() {
  const [current, setCurrent] = useState(1);
  const [touchPosition, setTouchPosition] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
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
  //Captures finger swipe move
  const handleTouchEnd = () => {
    if(touchEnd){
    const diff = touchPosition - touchEnd;
    if (diff > 15) {
      handleSlide(current === length ? 1 : current + 1);
    }
    if (diff < -15) {
      handleSlide(current === 1 ? length : current - 1);
    }
    setTouchPosition(null);
  }
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
            onTouchStart={e => {setTouchPosition(e.touches[0].clientX);setTouchEnd(0)}}
            onTouchMove={e => {setTouchEnd(e.touches[0].clientX)}}
            onTouchEnd={handleTouchEnd}>
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
