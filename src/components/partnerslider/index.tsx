import { apiBaseURL } from "@config/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import LeftArrow from "@components/Slider/LeftArrowNew";
import RightArrow from "@components/Slider/RightArrowNew";

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

function PartnerSlider({ ...props }) {
  const { apiToken } = props;

  const [show, setShow] = useState(false);
  const [sliderData, setSliderData]: any = useState();

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 500,
    slidesToShow: 4,
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


      <div className="services-slider services-slidermobile partnerSlider">
      <Slider {...settings}>

        <div  className="ser-carousel">
          <div className="gropserspacing">
            <div  className="ser-car-img">
       
              <div className="imgstyle">
               
                <div className="ser-car-desc">
                  <span> Trinity of Excellence</span>
                </div>
                <ul>
                    <li>Cutting Costs</li>
                    <li>Boosting Efficiency</li>
                    <li>Igniting Growth</li>
                </ul>
              
              </div>
            </div>
          </div>
        </div>

        <div  className="ser-carousel">
          <div className="gropserspacing">
            <div  className="ser-car-img">
       
              <div className="imgstyle">
               
                <div className="ser-car-desc">
                  <span>Tailored Business 
                  Models</span>
                </div>
                <ul>
                    <li>Pay for service</li>
                    <li>Pay for performance</li>
                    <li>Pay in equity</li>
                </ul>
              
              </div>
            </div>
          </div>
        </div>

        <div  className="ser-carousel">
          <div className="gropserspacing">
            <div  className="ser-car-img">
       
              <div className="imgstyle">
               
                <div className="ser-car-desc">
                  <span>  Comprehensive Service Portfolio</span>
                </div>
                <ul>
                    <li>Beyond conventional services</li>
                    <li>Practice tailored suite</li>
                    <li>Elevate brand growth</li>
                </ul>
              
              </div>
            </div>
          </div>
        </div>

        <div  className="ser-carousel">
          <div className="gropserspacing">
            <div  className="ser-car-img">
       
              <div className="imgstyle">
               
                <div className="ser-car-desc">
                  <span> Strategic  Guidance</span>
                </div>
                <ul>
                    <li>Guidance beyond service</li>
                    <li> Seize opportunities</li>
                    <li> Goal oriented solutions</li>
                </ul>
              
              </div>
            </div>
          </div>
        </div>
   
</Slider>
      </div>
    </>
  );
}
export default PartnerSlider;
