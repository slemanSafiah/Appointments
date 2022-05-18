import React from "react";

import { Carousel } from "antd";
import Rating from "@mui/material/Rating";

import "antd/dist/antd.css";

const institution = {
  images: ["assets/home/salons/salon1.jpg", "assets/home/salons/salon2.jpg"],
  category: "Hair Style",
  title: "Balance Massage & Wellness",
  location: "Homs , Syria",
  rate: 4.8
};

export default function InstitutionComp() {
  return (
    <div className="institution-container">
      <div className="institution-section1">
        <div className="institution-section1-card">
          <div className="institution-section1-card-category">
            {institution.category}
          </div>
          <div className="institution-section1-card-title">
            {institution.title}
          </div>
          <div className="institution-section1-card-location">
            {institution.location}
          </div>
          <div className="institution-section1-card-rating">
            <Rating
              name="half-rating"
              defaultValue={institution.rate}
              precision={0.1}
              readOnly
            />
          </div>
          <div className="institution-section1-card-booking">booking</div>
        </div>
        <div className="institution-section1-slider">
          <Carousel autoplay>
            {institution.images.map((img) => {
              return (
                <div className="institution-section1-slider-slide">
                  <img className="institution-img" src={img} alt="salon" />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
