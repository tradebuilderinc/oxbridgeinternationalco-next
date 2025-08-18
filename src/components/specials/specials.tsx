import FilterUrl from "@components/helper/FilterUrl";
import ReadableDate from "@components/helper/ReadableDate";
import SplitDescription from "@components/helper/splitDescription";
import { apiBaseURL } from "@config/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import Slider from "react-slick";
import LeftArrow from "@components/Slider/LeftArrowNew";
import RightArrow from "@components/Slider/RightArrowNew";
import { GrFormNext } from "react-icons/gr";
import Button from "@components/ui/button";
import { Image } from "react-bootstrap";
function Specials() {
  const [whyusData, setWhyusData]: any = useState([]);

  const getTestimonial = async () => {
    let path: string = "OurSpecial,OurSpecial.featuredImage";

    const response = await fetch(
      `${process.env.API_HOST_ADMIN}/api/our-specials/?populate=*&populate=${path}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const whyuses = await response.json();

  


    setWhyusData(whyuses?.data[0]?.attributes);
  };

  useEffect(() => {
    getTestimonial();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 500,
    slidesToShow: 3,
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
    <div className="home-speceal">
      <Slider {...settings}>
        {whyusData?.OurSpecial?.map((item: any, index: any) => (
          <div className="specealsec" key={index}>
            <div className="mainspeceal">
              <div className="specealimg">
                <div className="homespecealsec">
                  


                  <Image
                  src={
                    item?.featuredImage?.data?.attributes
                      ?.url
                      ? process.env.API_HOST_ADMIN +
                      item?.featuredImage?.data
                          ?.attributes?.url
                      : `${process.env.imagePath}1.png`
                  }
                  alt={
                    item?.featuredImage?.data?.attributes
                      ?.alternativeText
                  }
                />
                </div>
              </div>
              <div className="specealcont">
                <h4>{item?.title}</h4>
                <div className="hspecealcont">
                  <p className="mb-1">
                  {item?.subTitle}
                  </p>
                </div>
                <div className="specealprice">  {item?.shortDescription}</div>
                <div className="contbtn ">
                <Button
                      link={
                        item?.buttonUrl
                          ? item?.buttonUrl
                          : "#"
                      }
                      btnclass="btn btn-primary"
                    >
                      {item?.buttonName}
                      <span>
                        <GrFormNext />
                      </span>
                    </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default Specials;
