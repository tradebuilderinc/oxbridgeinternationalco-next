import Slider from "react-slick";
import LeftArrow from "@components/Slider/LeftArrowNew";
import RightArrow from "@components/Slider/RightArrowNew";
import { Container, Image } from "react-bootstrap";
import { GrFormNext } from "react-icons/gr";
import Button from "@components/ui/button";
import React, { useState, useEffect } from 'react';



function HeroSection({ ...props }) {

 

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
          arrow: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  
  return (
    // <div className="home-hero-section">
    //   <Container>
    //     <div className="hero-main">
    //       <div className="hero-text">
    //         <h2 className="h2">
    //           {props?.data?.title}
    //         </h2>
    //         <p>{props?.data?.subTitle}</p>
    //         <Button link={
    //           props?.data?.buttonUrl
    //             ? props?.data?.buttonUrl
    //             : "#"
    //         } btnclass="btn btn-primary">
    //           {props?.data?.buttonName}
    //           <span>
    //             <GrFormNext />
    //           </span>
    //         </Button>
    //       </div>
    //       <div className="hero-image">
    //         {" "}
    //         <Image
    //           src={
    //             props?.data?.featuredImage?.data?.attributes?.url
    //               ? process.env.API_HOST_ADMIN + props?.data?.featuredImage?.data?.attributes?.url
    //               : `${process.env.imagePath}headerimage.png`}
    //           alt={
    //             props?.data?.featuredImage?.data?.attributes?.alternativeText
    //               ? props?.data?.featuredImage?.data?.attributes?.alternativeText
    //               : process.env.siteName}
    //         />
    //       </div>
    //     </div>
    //   </Container>
    // </div>
    <div className="home-hero-section" data-aos="fade-up"
    data-aos-duration="2000">
    <Container>
      <div className="hero-main" >
        <div className="hero-text" >
          
        <Image  src="/images/islandsmiles/Flower.png" alt="" />
        <p>Smile Brighter with the</p>

    <h1 className="h2">Leading Dentist <br /> in Kahului, Maui, HI</h1>

<p className="second-p">At Island Dental, we don't just care for your teeth-we care for you. As the premier dentist in Kahului, Maui, HI,<br />
       we offer a wide range of dental services to ensure you and your family achieve healthy, beautiful smiles.</p>

         
          
          <Button link={"/contact" } btnclass="appointment-btn btn btn-primary">
          Book Your Appointment Today
            
          </Button>
        </div>
       
      </div>
    </Container>
  </div>
  );
}
export default HeroSection;
