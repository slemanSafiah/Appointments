import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper";

import "swiper/css";
import "swiper/css/effect-creative";

let Categories = [
  { title: "Hair Cut", image: "assets/home/hair.jpg" },
  { title: "Health Care", image: "assets/home/health.jpg" },
  { title: "Beauty", image: "assets/home/beauty.jpg" }
];

export default function Section2() {
  return (
    <div className="home-section2">
      <div className="home-section2-title">Discover by Categories</div>
      <div className="home-section2-swiper">
        <Swiper
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400]
            },
            next: {
              translate: ["100%", 0, 0]
            }
          }}
          modules={[EffectCreative]}
        >
          {Categories.map((cat) => {
            return (
              <SwiperSlide>
                <Card image={cat.image} title={cat.title} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div>
          <div className="outline-button">See All Categories</div>
          <div className="line-button">Discover Institutions</div>
        </div>
      </div>
    </div>
  );
}

function Card({ title, image }) {
  return (
    <div className="swiper-card">
      <img className="parallax-bg" src={image} alt={title} />
      <div className="swiper-card-title">{title}</div>
    </div>
  );
}
