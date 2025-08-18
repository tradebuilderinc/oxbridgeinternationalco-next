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

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  let token: string;
  if (!ctx.req.cookies.token) {
    token = "";
  } else {
    token = ctx.req.cookies.token;
  }

  let data;
  data = {
    apiToken: token,
  };
  return {
    props: data,
  };
}

function serviceSlider({ ...props }) {
  const { apiToken } = props;
  const videoJsonData: any = MainServiceJsonData();
  const [show, setShow] = useState(false);
  const [sliderData, setSliderData]: any = useState();

  var settings = {
    dots: false,
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          infinite: true,
          
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          dots: false,
          arrow: false,
          infinite: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrow: false,
          infinite: true,
        },
      },
    ],
  };


  useEffect(() => {
    if (props?.detail == "detail") {
      setSliderData(props?.data);
    } else {
      setSliderData(props?.details);
    }
  }, []);


  return (
    <>


      <div className="services-slider services-slidermobile">
      <Slider {...settings}>
  {videoJsonData &&
    videoJsonData.slice(0, 15).map((item: any, index:any) => {
      const isLastItem = index === videoJsonData.slice(0, 15).length - 1;
      return (
        <div  className="ser-carousel" key={index}>
          <div className="gropserspacing">
            <div  className={
              "ser-car-img" 
            }>
       
              <div className="imgstyle">
                <img
                  src={`/images/${item?.thumbs}`}
                  alt={item?.title}
                  className="img-fluid"
                />
                <div className="ser-car-desc">
                  <span>{item?.title}</span>
                </div>
                <p>{item?.des}</p>
                <div className="btn-service">
                  <Link className="learnmore" href={item?.url}>
                    Learn More <span><GoArrowUpRight /></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })}
</Slider>
      </div>
    </>
  );
}
export default serviceSlider;
