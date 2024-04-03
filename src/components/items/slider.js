"use client"
import React from "react";
import Slider from "react-slick";
import NextArrow from "./nextButton";
import PrevArrow from "./prevButton";
import "slick-carousel/slick/slick.css";
import BrandItem from "./brandItem";

function BrandSlider({slideShow, slideScoll}) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slideShow,
    slidesToScroll: slideScoll,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };
  return (
      <Slider {...settings}>
        <BrandItem title={'123'} src={'/IMG_2800.JPG'}/>
        <BrandItem title={'123'} src={'/IMG_2801.JPG'}/>
        <BrandItem title={'123'} src={'/IMG_2802.JPG'}/>
        <BrandItem title={'123'} src={'/IMG_2804.JPG'}/>
        <BrandItem title={'123'} src={'/IMG_2809.JPG'}/>
        <BrandItem title={'123'} src={'/IMG_2802.JPG'}/>
        <BrandItem title={'123'} src={'/IMG_2800.JPG'}/>
        <BrandItem title={'123'} src={'/IMG_2804.JPG'}/>
        <BrandItem title={'123'} src={'/IMG_2801.JPG'}/>
        <BrandItem title={'123'} src={'/IMG_2809.JPG'}/>
        <BrandItem title={'123'} src={'/IMG_2802.JPG'}/>
      </Slider>
  );
}

export default BrandSlider;
