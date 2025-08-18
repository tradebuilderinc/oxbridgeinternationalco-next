import { apiBaseURL } from "@config/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import LeftArrow from "@components/Slider/LeftArrowNew";
import RightArrow from "@components/Slider/RightArrowNew";
import { MainServiceJsonData } from "@components/data/service.js";
import { Image } from "react-bootstrap";
import path from "path";
import { url } from "inspector";
import { GoArrowUpRight } from "react-icons/go";
import { GetServerSidePropsContext } from "next";



function ReviewSlider({ ...props }) {


  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    nextArrow: (
      <RightArrow
        to="next"
        className=""
        onClick={() => console.log("right arrow")}
        customClass="home3 home-arrow-slider-right"
      />
    ),
    prevArrow: (
      <LeftArrow
        to="prev"
        className=""
        onClick={() => console.log("left arrow")}
        customClass="home3  home-arrow-slider-left"
      />
    ),

    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };


  return (
    <>
   <Slider {...settings}>
       <div className="item">
            <div className="inner">
              <p>We worked with Steve for about six months while he worked on our real estate needs.
                He is extremely knowledgeable and was able to find what we needed. We knew nothing
                about this kind of a corporate transaction but Steve was very patient with us
                keeping updated. We would highly recommend Steve to anyone needing real estate
                services.</p>
              <h6> Don Adams</h6>
            </div>
          </div>


          <div className="item">
            <div className="inner">
              <p>I've been impressed with Steve's professional manor and knowledge. The man has a
                presence that assured me I was getting sound advice.</p>
              <h6>Steve Oku</h6>
            </div>
          </div>
   </Slider>

    </>
  );
}
export default ReviewSlider;
