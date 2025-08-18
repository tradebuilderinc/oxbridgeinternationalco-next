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
function Whyus() {
  const [whyusData, setWhyusData]: any = useState([]);

  const getTestimonial = async () => {
    let path: string = "whyus,whyus.featuredImage";

    const response = await fetch(
      `${process.env.API_HOST_ADMIN}/api/why-uses/?populate=*&populate=${path}`,
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
    <div className="home-whyus">
      <div className="pagehead pb-0">
        <p className="our-plain pt-2">{whyusData?.title}</p>
        <h2>Kahului Dental Clinic</h2>
        <p className="our-des">Your Family's Home for Dental Excellence</p> <br />

        <div className="container px-0">
  <div className="row">
    <div className="col-md-6 mb-4">
      <h3>Comprehensive Care</h3>
      <p>From check-ups to cosmetic treatments, we cover all your dental needs.</p>
    </div>
    <div className="col-md-6 mb-4">
      <h3>Expert Team</h3>
      <p>Our skilled team delivers top-quality care using the latest advancements.</p>
    </div>
    <div className="col-md-6 mb-4">
      <h3>Patient-Centered Approach</h3>
      <p>We prioritize your comfort with personalized, stress-free care.</p>
    </div>
    <div className="col-md-6 mb-4">
      <h3>Relaxing Environment</h3>
      <p>Relax in our tranquil Maui office for a soothing dental experience.</p>
    </div>
  </div>
</div>

      </div>
      <div className=" contbtn ">
        <div >
          <Button
            //link={whyusData?.buttonUrl ? whyusData?.buttonUrl : "#"}
            link="/about-us"
            btnclass="btn btn-primary"
          >
            Learn More
           
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Whyus;
