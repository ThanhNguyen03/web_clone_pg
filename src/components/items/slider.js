"use client"
import React from "react";
import Slider from "react-slick";
import NextArrow from "./nextButton";
import PrevArrow from "./prevButton";
import "slick-carousel/slick/slick.css";
import BrandItem from "./brandItem";

function BrandSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };
  return (
      <Slider {...settings} className="max-w-[1512.8px]">
        <div className="">
          <BrandItem title={'123'} src={'/IMG_2800.JPG'}/>
        </div>
        <div className="">
          <BrandItem title={'123'} src={'/IMG_2801.JPG'}/>
        </div>
        <div className="">
          <BrandItem title={'123'} src={'/IMG_2802.JPG'}/>
        </div>
        <div className="">
          <BrandItem title={'123'} src={'/IMG_2804.JPG'}/>
        </div>
        <div className="">
          <BrandItem title={'123'} src={'/IMG_2809.JPG'}/>
        </div>
        <div className="">
          <BrandItem title={'123'} src={'/IMG_2802.JPG'}/>
        </div>
        <div className="">
          <BrandItem title={'123'} src={'/IMG_2800.JPG'}/>
        </div>
        <div className="">
          <BrandItem title={'123'} src={'/IMG_2804.JPG'}/>
        </div>
        <div className="">
          <BrandItem title={'123'} src={'/IMG_2801.JPG'}/>
        </div>
        <div className="">
          <BrandItem title={'123'} src={'/IMG_2809.JPG'}/>
        </div>
        <div className="">
          <BrandItem title={'123'} src={'/IMG_2802.JPG'}/>
        </div>
      </Slider>
  );
}

export default BrandSlider;
